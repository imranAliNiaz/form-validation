export type buttonType = {
    title?: string,
    onClicked(): void,
}

export type contactInfoType = {
    first_name :string,
    last_name :string,
    father_name :string,
    mother_name :string,
    age :number,
    school :string,
    college :string,
    university :string,
    email : string,
    phone : number,
    message : string
}
export type onChnageEventType = {
    target : { name: string, value: string | number}

}
export type ErrorTypes = {
    error : string
}

