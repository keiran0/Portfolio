import BackButton from './UI/BackButton'

export default function Contact({handleBack}){
    return(
        <>
            <BackButton onClick={handleBack}/>
            <h2>Email: keirankam@gmail.com</h2>
        </>
    )
}