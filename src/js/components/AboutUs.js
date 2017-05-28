import React from 'react';
import ReactDOM from 'react-dom';


export default class AboutUs extends React.Component{
    constructor(){
        super();

        this.state = {isLogin:false}
    }

    showLoginRegister () {
        this.setState({isLogin:true});
    }

    render(){
        return(
            <div>

                   <p>
								<b>CakeWalk</b> - The name which struck after almost 2 yrs of indecisive thinking was an instant choice for me. 

                                Whats the reason? 

                                In the past or rather when I begun my work as "I.T. Do it all" Guy, whenever I met my local clients, they were always confused about the softwares they were using. Everything looked so confusing to them, that they could never use the software beyond a certain limit. Like Using word with only Font, Size,Bold Italic and Underline rest all other options looking Greek French German to them. 

                                As I met more and more clients, I realised that its not the fault of softwares they are using,or rather often not the problem, but the problem of lack of awareness of what they can do and also the fear "If I do something wrong, Computer will get a virus!!!". 

                                Funny, as that may sound it was the fact and then I knew what I have to do, along with getting the clients, making them so comfortable with the softwares or websites they get made from us, they just "it's simple". 

                                And so the name CakeWalk - I.T.'s Simple. 

                                Today with a team of 22 Full time and 8 part time employees working for us we have made more than 90 websites, 14 web applications,several desktop applications and mobile apps and carried out several marketing campaigns working from a small office in Punes. 

                                Whats our Vision? 

                                To see more and more people use the IT services in their day to day lives to lead a much better and stress free life.
							</p>

            </div>
              

        )
    }
}











         
        
    

