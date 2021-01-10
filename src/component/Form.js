import React, { useState } from 'react';
import './Form.css';

function Form() {
	
	//card number digits check
	const [card,setCard] = useState('');
	const [item,setItem] = useState([]);
	
	const firstEvent = (e) => {
		
		setCard(e.target.value);
		
		setItem((prev) => { return [...prev,card]});
		
		if ((item.length+1) !== 16){
			document.getElementById('card').innerHTML = "Card number should be 16 digits";
		}
		else if ((item.length+1) === 16) { 
			document.getElementById('card').innerHTML = "";
		}
	} 
	
	//CCV code digits check
	const [code,setCode] = useState('');
	const [codeArr, setCodeArr] = useState([]);
	
	const secondEvent = (e) => {
		
		setCode(e.target.value);
		
		setCodeArr((prev) => { return [...prev, code] });
		
		if ((codeArr.length+1) !== 3){
			document.getElementById('code').innerHTML = "CCV code should be of 3 digits";
		}
		else if ((codeArr.length+1) === 3) { 
			document.getElementById('code').innerHTML = "";
		}
	}
	
	//importing system date
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1; //As January is 0.
	var yyyy = today.getFullYear();
	
	if(dd<10){
		dd='0'+dd;
	} 
	if(mm<10){
		mm='0'+mm;
	}
	
	var day = yyyy + '-' + mm + '-' + dd;
	
	
	
	return (
		<div className="Form">
			<form action='/validate' method='POST'>
		
				<label> Credit card number </label>
				<input type='text' value={card} maxlength='16' required onChange={firstEvent}/>
				<p id='card' style={{ color: 'red' }}></p>
			
				<br/><br/>
			
				<label> Card holder name </label>
				<input type='text' required />
			
				<br/><br/>
				
				<label> Expiration Date </label>
				<input type='date' min={day} required />		
			
				<br/><br/>
			
				<label> Security Code - CCV </label>
				<input type='text' value={code} maxlength='3' minlength='3'onChange={secondEvent} />
				<p id='code' style={{ color: 'red' }}></p>
			
				<br/><br/>
			
				<label> Amount </label>
				<input type='number' className='Form__amt' min='1' required />
			
				<br/><br/>
			
				<button type='submit'>Make Payment</button>
			</form>
		</div>
	);
}

export default Form;