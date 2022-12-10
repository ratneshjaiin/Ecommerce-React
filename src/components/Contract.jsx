import React from 'react'
import { useForm, ValidationError } from '@formspree/react';
const Contract = () => {
  const [state, handleSubmit] = useForm("xrgdzapy");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }

  return (
  <section className="location-block">
    <div className="container">
        <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
                <div className="location-map">
                    <h2>find your closest daybreak</h2>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.7577636092747!2d75.89295271421827!3d22.737243285098337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd4de8379fff%3A0xd9eef0e76ba7c3ec!2sNewTechFusion!5e0!3m2!1sen!2sin!4v1646995077514!5m2!1sen!2sin" width="100%" height="300" style={{border:"0"}} allowFullScreen="" loading="lazy"></iframe>
                </div>
            </div>
        </div>
 <form id="fs-frm" onSubmit={handleSubmit} method="post" encType="multipart/form-data">
  <fieldset id="fs-frm-inputs">
    <label forhtml="full-name">Full Name</label>
    <input type="text" name="name" id="full-name" placeholder="First and Last" required=""/>
    <label forhtml="email-address">Email Address</label>
    <input type="email" name="_replyto" id="email-address" placeholder="email@domain.tld" required=""/>
    <label forhtml="street-address">Street Address</label>
    <input type="text" name="street" id="street-address" placeholder="Street" required=""/>
    
    <fieldset className="locale">
      <legend>Locale</legend>
      <input type="text" name="city" placeholder="City" required=""/>
      <select name="state" required="">
        <option value="" defaultValue="" disabled="">State</option>
      	<option value="AL">Alabama</option>
      	<option value="AK">Alaska</option>
      	<option value="AZ">Arizona</option>
      	<option value="AR">Arkansas</option>
      	<option value="CA">California</option>
      	<option value="CO">Colorado</option>
      	<option value="CT">Connecticut</option>
      	<option value="DE">Delaware</option>
      	<option value="DC">District Of Columbia</option>
      	<option value="FL">Florida</option>
      	<option value="GA">Georgia</option>
      	<option value="HI">Hawaii</option>
      	<option value="ID">Idaho</option>
      	<option value="IL">Illinois</option>
      	<option value="IN">Indiana</option>
      	<option value="IA">Iowa</option>
      	<option value="KS">Kansas</option>
      	<option value="KY">Kentucky</option>
      	<option value="LA">Louisiana</option>
      	<option value="ME">Maine</option>
      	<option value="MD">Maryland</option>
      	<option value="MA">Massachusetts</option>
      	<option value="MI">Michigan</option>
      	<option value="MN">Minnesota</option>
      	<option value="MS">Mississippi</option>
      	<option value="MO">Missouri</option>
      	<option value="MT">Montana</option>
      	<option value="NE">Nebraska</option>
      	<option value="NV">Nevada</option>
      	<option value="NH">New Hampshire</option>
      	<option value="NJ">New Jersey</option>
      	<option value="NM">New Mexico</option>
      	<option value="NY">New York</option>
      	<option value="NC">North Carolina</option>
      	<option value="ND">North Dakota</option>
      	<option value="OH">Ohio</option>
      	<option value="OK">Oklahoma</option>
      	<option value="OR">Oregon</option>
      	<option value="PA">Pennsylvania</option>
      	<option value="RI">Rhode Island</option>
      	<option value="SC">South Carolina</option>
      	<option value="SD">South Dakota</option>
      	<option value="TN">Tennessee</option>
      	<option value="TX">Texas</option>
      	<option value="UT">Utah</option>
      	<option value="VT">Vermont</option>
      	<option value="VA">Virginia</option>
      	<option value="WA">Washington</option>
      	<option value="WV">West Virginia</option>
      	<option value="WI">Wisconsin</option>
      	<option value="WY">Wyoming</option>
      </select>
      <input type="text" name="postal-code" placeholder="12345" required=""/>
    </fieldset>
    <label forhtml="note">Note</label>
    <textarea rows="2" name="note" id="note" placeholder="Include any additional information"></textarea>
    <input type="hidden" name="_subject" id="email-subject" value="Registration Form Submission"/>
    
  </fieldset>
  <input type="submit" value="Register"/>
</form>
  </div>
</section>
  )
}
export default Contract