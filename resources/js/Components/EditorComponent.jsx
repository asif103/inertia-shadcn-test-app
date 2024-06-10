import React from 'react'
import { useState } from 'react';
import {
    BtnBold,
    BtnBulletList,
    BtnItalic,
    BtnNumberedList,
    BtnRedo,
    BtnStrikeThrough,
    BtnUnderline,
    BtnUndo,
    Editor,
    EditorProvider,
    Toolbar
} from 'react-simple-wysiwyg';
import { Button } from './ui/button';
import { X } from 'lucide-react';
const ChildComponent = () => {
    return <div>Child Component</div>;
  };


export const EditorComponent = ({ title }) => {
    const [value, setValue] = useState('');
    const [shown, setShown] = useState(true)


    function onChange(e) {
        setValue(e.target.value);
    }
    return (<>
        {
            shown ?
                <div className='p-5 bg-white rounded-lg border border-solid m-3'>

                    <div className='flex justify-between mb-2'>
                        <h2 className='text-md font-bold'>{title}</h2>
                        <Button variant="outline" className="h-6 w-6" size="icon" onClick={() => setShown(false)}><X /></Button>
                    </div>
                    <EditorProvider>
                        <Editor value={value} onChange={onChange}>
                            <Toolbar>
                                <BtnBold />
                                <BtnItalic />
                                <BtnRedo />
                                <BtnUndo />
                                <BtnUnderline />
                                <BtnStrikeThrough />
                                <BtnBulletList />
                                <BtnNumberedList />
                            </Toolbar>
                        </Editor>
                    </EditorProvider>

                </div>
                : ""}
                
    </>
    )
}
