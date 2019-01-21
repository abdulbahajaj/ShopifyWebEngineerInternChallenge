import React, { Component } from 'react';
import APPManager from '../APPManager.js'
var Parser = require('html-react-parser');

class Result extends Component{
	constructor(props){
		super(props);
		this.fav = this.fav.bind(this);
	}
	fav(){
		APPManager.toggleFav(this.props.item.id);
	}
	render(){
		var content = this.props.item.body;//"&lt;ul&gt; &lt;li&gt;Place item in the &lt;strong&gt;Garbage Bin.&lt;/strong&gt;&lt;/li&gt; &lt;/ul&gt;"
		content = Parser(content)
		console.log(this.props.item.faved)

		var isFaved = ""
		if(this.props.item.faved){
			isFaved += "fav";
		}


		return (
			<div className="Result">
				<div className='title'>
					<i onClick={this.fav} className={"fas fa-star star "+isFaved}></i>
					{this.props.item.title}
				</div>
				<div className="description">
					<div dangerouslySetInnerHTML={{__html:content}}></div>
				</div>
			</div> 
		)
	}
}



class Results extends Component {
    render() {
    	var faved = [];
    	var notFaved = [];
    	this.props.display.map(function(item){
    		if(item.faved){
    			faved.push(<Result key={item.id} item={item}/>);
    		}else{
    			notFaved.push(<Result key={item.id} item={item}/>)
    		}
    	})

    	return (
            <div className='Results'>
            	{notFaved}
                <div className='favs'>
                	<div className="sectionTitle">Favourites</div>
                	{faved}
                </div>
            </div>
    	)
    }
}

export default Results;






















































