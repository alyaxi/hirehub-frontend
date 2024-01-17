import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import adminServices from '../../services/Admin/adminServices';
import { handleApiError } from '../../utilis/errorHandling';
import { convertDateFormat } from '../../utilis/convertDateStamp';





export const getEmployers = createAsyncThunk('admin/manage-employers', async (_) => {

    try {
        // console.log("getemployererrr consolee")
        const data = await adminServices.getEmployersDetail()
        // console.log(data, "dataaaaa")
        return data
    } catch (error) {
        // Handle login error
        // console.log(error);
        handleApiError(error)
    }
});

export const viewEmployer = createAsyncThunk('admin/view-employer', async (id) => {

    try {
        // console.log("getemployererrr consolee", id)
        const data = await adminServices.VieEmployersDetailById(id)
        // console.log(data, "view employer dataaaaa")
        return data
    } catch (error) {
        // Handle login error
        // console.log(error);
        handleApiError(error)
    }
});

export const employerStatusChange = createAsyncThunk('admin/change-status-employer', async ({id, statusCheck} ) => {

    try {
        // console.log("getemployererrr consolee", id, statusCheck)
        const data = await adminServices.EmployerStatusChange(id, statusCheck)
        // console.log(data, "view employer dataaaaa")
        return data
    } catch (error) {
        // Handle login error
        // console.log(error);
        handleApiError(error)
    }
});

const adminSlice = createSlice({
    name: 'admin',
    initialState: {
        user: JSON.parse(localStorage.getItem('user')),
        isAuthenticated: JSON.parse(localStorage.getItem('user')) ? true : false,
        role: null,
        error: null,
        employersDataTable: [],
        employerDetails: {},
        reload: false,
    },
    reducers: {
        setUser: (state, action) => {
            // state.user = action.payload;
            // state.isAuthenticated = true;
        },


    },
    extraReducers: (builder) => {

        builder.addCase(getEmployers.fulfilled, (state, { payload }) => {
            // console.log(payload, "payloadd from getting employer by admin");
            const employerData = payload.data.employers
            const newEmployerDataTable = []
            for (let i = 0; i < employerData?.length; i++) {
                const employer = employerData[i];
                const plan = employer?.payments[0]?.plans;
                const status = employer?.payments[0]?.paymentStatus;
                const nextPayment = employer?.payments[0]?.nextPayment;
                const userEmail = employer?.userId?.email;


                newEmployerDataTable.push({
                    id: employer._id,
                    name: employer.userId?.name,
                    plans: plan,
                    payment: status,
                    nextPayment: convertDateFormat(nextPayment),
                    account: employer?.accountStatus,
                    isVerified: employer?.isVerified,
                    companyName: employer?.companyName,
                    email: userEmail,
                 



                });

                // console.log({ newEmployerDataTable });
                state.employersDataTable = newEmployerDataTable
            }
        })
        builder.addCase(viewEmployer.fulfilled, (state, { payload }) => {
            // console.log(payload, "payloadd from view employer by admin");
            state.employerDetails = payload?.data?.employer


        })
        builder.addCase(employerStatusChange.fulfilled, (state, { payload }) => {
            console.log(payload, "payloadd from change status employer by admin");
            state.reload = true
        })


    }
});

export const { setUser } = adminSlice.actions;


export default adminSlice.reducer;
