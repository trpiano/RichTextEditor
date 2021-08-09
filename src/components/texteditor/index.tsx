import React, { Component } from 'react';

import draftToHtml from 'draftjs-to-html';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw } from 'draft-js';

// Styles Import
import { Container } from './styles'
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

class TextEditor extends Component {

    state = {
        editorState: EditorState.createEmpty(),
    };

    onEditorStateChange = (editorState: EditorState) => {
        this.setState({
            editorState,
        });
    };

    render() {
        const { editorState } = this.state;

        return(
            <Container>
                <Editor 
                    editorState={editorState}
                    toolbarClassName="toolbar"
                    wrapperClassName="wrapper"
                    editorClassName="editor"
                    onEditorStateChange={this.onEditorStateChange}
                />
                <textarea
                    disabled
                    value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
                >

                </textarea>
            </Container>
        )
    }
}   

export default TextEditor;