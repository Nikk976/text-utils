import React from 'react';

export default function About(props) {
   let myStyle = {
        color : props.mode === 'dark'?'white':'black',
        backgroundColor : props.mode === 'dark'? "#021458":"white",
        border:'1px solid',
        borderColor:  props.mode === 'dark'?'white':'black',

   }

    
    
    
    
  return (
    <div className="container">
      <h2 className='my-3'  style={{color:props.mode === 'dark'?'white':'black'}}>About Us</h2>
        <div className="accordion" id="accordionExample">
  <div className="accordion-item" style={myStyle} >
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" style={myStyle}  data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
       <strong>Analyze your text</strong> 
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show"  data-bs-parent="#accordionExample">
      <div className="accordion-body"  >
       Text utils gives you a way to analyze your text quickly and efficiently. Be it wrod count, character count or
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle} >
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <strong>Free to Use</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse"  data-bs-parent="#accordionExample">
      <div className="accordion-body"  >
      Textutils is a free character counter tool that provides instant character count & word count statistics for a given text. Textutils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle} >
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <strong>Brower Compatible</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse"  data-bs-parent="#accordionExample">
      <div className="accordion-body"  >
      This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
      </div>
    </div>
  </div>
</div>

    </div>
  )
}
