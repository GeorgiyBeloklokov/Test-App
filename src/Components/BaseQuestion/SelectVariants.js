import React, {useState} from 'react';
import {Controller, FormProvider, useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {confettiToggle} from "../Redux/editQuestionSlice";
import ModalSendQuest from "../CreateQuestion/ModalSendQuest";
import {useNavigate} from "react-router-dom";
import {Button, Checkbox, FormControlLabel, Grid} from "@mui/material";


const SelectVariants = (bigData) => {

    const dispatch = useDispatch();
    let questId = (bigData.questId);
    let variants = bigData.variants;
    /*console.log(`test variants from SelectVariants`,variants)*/


    const methods = useForm();
    const {handleSubmit} = methods;

    const [open2, setOpen2] = useState(false);
    const [open, setOpen] = useState(false);
    dispatch(confettiToggle({open}));
    const handleClose = () => setOpen(false);
    const navigate = useNavigate();

    setTimeout(() => {
        if (open) {
            setOpen(false);
            setTimeout(()=>{
                navigate('/questionlist');
            },450);
        }
        if (open2) {
            setOpen2(false);
        }
    }, 3900);



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
        <div >

            <div>
                <ModalSendQuest children1 = {"Correct answer "}
                                children2={"You have chosen correct answer to the question, Let`go to Questions List..."}

                                open={open}

                                handleClose={handleClose} />

            </div>
            <div>
                <ModalSendQuest children1 = {"Wrong answer"}
                                children2={"Try to resolve the issue again or choose another question"}
                                children3={{color:'red'}}
                                open={open2}

                                handleClose={handleClose} />

            </div>
            <FormProvider {...methods}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {variants.map((variant) => (
                        <Grid key={variant} item>
                                <Controller
                                    name={`variants.${variant.index}.checkbox`}
                                    control={methods.control}
                                    render={({ field
                                             }) => <FormControlLabel  control={ <Checkbox  size="small" {...field} />} label="Right answer" />}
                                />
                        </Grid>
                    ))}
                    <Button type="submit" variant="contained" size="small"
                    >
                        Submit answer
                    </Button>
                </form>
            </FormProvider>
        </div>
    );
};

export default SelectVariants;