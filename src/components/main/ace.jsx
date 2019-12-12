import React from 'react';
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/ext-language_tools"
import "ace-builds/src-noconflict/mode-mysql";
import "ace-builds/src-noconflict/theme-github";
class AceEditorBox extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          clientHeight:window.innerHeight-65
      }
    }
   
    
   
    onChange(v){
        console.log(v)
    }
    render(){

        return (
            <div>
                <AceEditor
                    editorProps={{ $blockScrolling: true }}
                    enableBasicAutocompletion={true}
                    enableLiveAutocompletion={true}
                    enableSnippets={true}
                    mode="mysql"
                    theme="github"
                    onChange={this.onChange.bind(this)}
                    name={"UNIQUE_ID_OF_DIV"+this.props.title}
                    style={{width:'100%',height:this.state.clientHeight}}
                    editorProps={{ $blockScrolling: true }}
                />
            </div>
        )
    }
}

export default AceEditorBox;
