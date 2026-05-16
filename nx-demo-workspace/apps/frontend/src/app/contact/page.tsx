// export const dynamic = 'force-dynamic';

async function getDate() : Promise<Date>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(new Date())
        }, 4000);
    })
}
export default async function Contact(){
    const currentTime = await getDate()
    return (
        <div>
            <h3>Email : contact-me@sify.com</h3>
            <h4>Date : {currentTime.toString()}</h4>
        </div>
    )
    /* this is a comment */
}