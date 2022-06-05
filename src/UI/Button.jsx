import classes from '../UI/Button.module.css';

const Button = props => {
    return <button className={classes['button-design']} onClick={props.onClick}>
        {props.title} 
    </button>
}

export default Button;