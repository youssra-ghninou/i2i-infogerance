const NavIttem = (props) => {
    return (
        <div className={`${props.className}`}>
            <a href={props.href}>
                {props.content}
            </a>
        </div>
    );
}
 
export default NavIttem;