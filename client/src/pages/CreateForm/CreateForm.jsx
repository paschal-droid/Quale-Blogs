import React from 'react'
import '../form.css';

const CreateForm = () => {
  return (
    <div className='create-container'>
        <form className='create-form'>
            <div className="title">
                <input type="text" name="title" id="title" />
                <div className="options">
                    <div className="lang">
                        <label htmlFor="lang">Choose a Language</label>
                        <select name="language" id="lang">
                            <option value="English"></option>
                            <option value="French"></option>
                            <option value="Swahili"></option>
                        </select>
                        
                    </div>
                </div>
            </div>
        </form>
    </div>
  )
}

export default CreateForm