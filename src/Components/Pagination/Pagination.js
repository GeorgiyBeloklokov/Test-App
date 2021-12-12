import * as React from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

/*let renderCount = 0;*/
export default function TestAppPagination({handleChange, page, questionsPerPage, questions}) {
    // Render component control
    /*renderCount += 1;
    console.log(`TestAppPagination rendered:`, renderCount);*/


    const pageNumbers = [];
    /*console.log(`test pageNumbers from TestAppPagination:`, pageNumbers);*/

    for (let i = 1; i <= Math.ceil(questions / questionsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <>
            {pageNumbers.length > 1 && (
                <Stack spacing={2}>
                    <Typography>Page: {page}</Typography>
                    <Pagination count={pageNumbers.length}
                                color="primary"
                                page={page}
                                onChange={handleChange}/>

                </Stack>
            )}
        </>
    );
}
