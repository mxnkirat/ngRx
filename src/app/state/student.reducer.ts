import { createReducer } from "@ngrx/store";
import { studentRecords } from "./student-record";

export const initState: ReadonlyArray<studentRecords> = [{
    name: "Mankirat",
    roll_Number: 68,
    course_name: "Btech",
    city: "delhi",
    country: "India",
    subject: "Applied Mathematics",
    date: "01-02-2025",
    email: "xyz123@email.com",
    phone_num: "8076389098",
    postalCode: 110032
}];
 export const studentReducers = createReducer(
    initState
 );