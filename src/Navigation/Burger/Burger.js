
import "./Burger.css"

const Burger = ({isActive, setIsActive}) => {

    return (
        <>
          <button 
          className={`burger${isActive? " burger--active": ""}`}
             onClick={setIsActive}
          >
              <span className="burger__container">
                  <span className="burger__icon"></span>
              </span>
          </button> 
        </>
      );
}
 
export default Burger;

