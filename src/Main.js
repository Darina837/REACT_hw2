import React from 'react';
import google from './images/google.png';
import SearchInput from './SearchInput';


function Main() {
    return (
        <div className='main'>
            <img src={google} width='300' alt='Google' />
            {/* <form>
                <input type='text' onKeyUp={SearchInput} />
            </form> */}
            <SearchInput />
            <div className='buttons'>
                <button>Поиск в Google</button>
                <button>Мне повезёт!</button>
            </div>
            
        </div>
    );
}

export default Main;