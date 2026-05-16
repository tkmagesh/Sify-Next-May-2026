export default function AboutLayout(props : any){
    return (
        <div>
            {props.children}
            <hr/>
            {props.company}
            <hr/>
            {props.testimonials}
        </div>
    )
}