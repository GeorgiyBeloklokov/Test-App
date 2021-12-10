import * as React from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


export default function TestAppPagination({ handleChange, page, questionsPerPage, questions}) {
const  pageNumbers = [];
    console.log(`test pageNumbers from TestAppPagination:`, pageNumbers);

for (let i = 1; i <= Math.ceil(questions / questionsPerPage); i++) {
    pageNumbers.push(i);
}

    return (
        <Stack spacing={2}>
            <Typography>Page: {page}</Typography>
            <Pagination count={pageNumbers.length}
                        page={page}
                        onChange={handleChange}/>
        </Stack>
    );
}
