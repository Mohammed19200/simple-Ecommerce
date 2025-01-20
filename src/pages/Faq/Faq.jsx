import React, { useEffect } from 'react'
import './Faq.css'
import WOW from 'wowjs';
export default function Faq() {

  useEffect(() => {
    new WOW.WOW({
      live: true
    }).init();
  }, [])

  return (
    <div className='col-12'>

      <div className='bigdivvv col-10 wow animate__animated animate__fadeInDown animate__slow' data-wow-delay="0.1s">

        <h1 className='titleaccor'>Shipping information</h1>
        <div className="accordion accordion-flush" id="accordionFlushExample">

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                What payment methods do you accept?
              </button>
            </h2>
            <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">Our method is home delivery and the amount of money is cash.</div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                How can I track my order?
              </button>
            </h2>
            <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">Explain the order tracking process, including how customers can access their tracking information, estimated delivery times.</div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                What is your return Policy?
              </button>
            </h2>
            <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">Clearly outline your return policy, covering aspects like the timeframe for returns, conditions for product eligibility, and the process for initiating a return or exchange.</div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                Do you offer warrantly services for your Products?
              </button>
            </h2>
            <div id="flush-collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">Clearly outline your return policy, covering aspects like the timeframe for returns, conditions for product eligibility, and the process for initiating a return or exchange.</div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                Is my Personal information secure when making a purchase?
              </button>
            </h2>
            <div id="flush-collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">Detail your warranty policy, including the duration of coverage, types of issues covered, and the steps customers should take if they encounter problems with their purchased devices.</div>
            </div>
          </div>

        </div>

      </div>

      {/*  */}

      <div className='bigdivvv col-10 wow animate__animated animate__fadeInUp animate__slow' data-wow-delay="0.1s">

        <h1 className='titleaccor'>Our Return policy</h1>
        <div className="accordion accordion-flush" id="accordionFlushExample">

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne1" aria-expanded="false" aria-controls="flush-collapseOne1">
                Contact our customer service
              </button>
            </h2>
            <div id="flush-collapseOne1" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">Provide a list of accepted payment methods, such as credit/debit cards, digital wallets, and any other relevant options. Include information about any installment or financing plans you offer.</div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo2" aria-expanded="false" aria-controls="flush-collapseTwo2">
                Damaged or Defective items
              </button>
            </h2>
            <div id="flush-collapseTwo2" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">Explain the order tracking process, including how customers can access their tracking information, estimated delivery times, and any third-party delivery services used.</div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree3" aria-expanded="false" aria-controls="flush-collapseThree3">
                What is your return Policy?
              </button>
            </h2>
            <div id="flush-collapseThree3" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">Clearly outline your return policy, covering aspects like the timeframe for returns, conditions for product eligibility, and the process for initiating a return or exchange.</div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour4" aria-expanded="false" aria-controls="flush-collapseFour4">
                Do you offer warrantly services for your Products?
              </button>
            </h2>
            <div id="flush-collapseFour4" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">Detail your warranty policy, including the duration of coverage, types of issues covered, and the steps customers should take if they encounter problems with their purchased devices.</div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive5" aria-expanded="false" aria-controls="flush-collapseFive5">
                Is my Personal information secure when making a purchase?
              </button>
            </h2>
            <div id="flush-collapseFive5" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">Assure customers about the security measures in place for their personal and payment information. Highlight any encryption technologies or industry standards you adhere to.</div>
            </div>
          </div>

        </div>

      </div>

    </div>
  )
}
