import * as React from 'react';
import CheckBoxAnswer from "./CheckBoxAnswer";
import {Button, Grid} from "@mui/material";
import {useForm, FormProvider} from "react-hook-form";
import {useDispatch} from "react-redux";
import {addUserAnswer} from "../toolkitRedux/questionReducerSlice";
import {useState} from "react";
import ModalSendQuest from "../CreateQuestion/ModalSendQuest";
import {useHistory} from "react-router-dom";

/*console.log(data);
dispatch(addUserAnswer({...data,questId}));*/


export default function SelectVariants(bigData) {
    const dispatch = useDispatch();
    let questId = (bigData.questId);
    let variants = bigData.variants;
    const methods = useForm();
    const {handleSubmit} = methods;

    const [open2, setOpen2] = useState(false);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const history = useHistory();

    setTimeout(() => {
        if (open) {
            setOpen(false);
            setTimeout(()=>{
                history.push('/questionslist');
            },490);
        }
        if (open2) {
            setOpen2(false);
        }
    }, 3500);





    const onSubmit = (data) => {
        let answerVariant = variants.every(({id, rightAnswer}) => data[id] === rightAnswer);
        console.log(answerVariant);
        if (answerVariant) {
            setOpen(true);
        } else {
            setOpen2(true);
        }

    };


    return (
        <div>
            <div>
                <ModalSendQuest children1 = {"Correct answer "}
                                children2={"You have chosen correct answer to the question, Let`go to Questions List..."}
                                open={open}
                                handleOpen={handleOpen}
                                handleClose={handleClose} />

            </div>
            <div>
                <ModalSendQuest children1 = {"Wrong answer "}
                                children2={"try to resolve the issue again or choose another question"}
                                open={open2}
                                handleOpen={handleOpen}
                                handleClose={handleClose} />

            </div>
            <FormProvider {...methods}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {bigData.variants.map((variant) => (
                        <Grid key={variant.id} item>

                            <CheckBoxAnswer variant={variant} questId={bigData.questId}/>

                        </Grid>
                    ))}
                    <Button type="submit" variant="contained" size="small"
                    >
                        Submit answer
                    </Button>
                </form>
            </FormProvider>


        </div>
    )
};
