import React from 'react'

function Form() {

    const handleChangeForm = (e) => {

        // console.log(e);

        // console.log(e.target.name);

        console.log(e.target.value);
        setTimeout(() => {
            console.log("time is up to submit")
        }, 3000);

    }

    function handleformsubmit() {
        console.log("form is submit")
    };
    return (
        <div>
            <form >
                <h2>Form submission</h2>
                <input type="text" name="example" onChange={handleChangeForm} />
            </form>
            <button onClick={handleformsubmit}>Submit</button>
        </div>
    )
}

export default Form

