import { FaJetFighter } from 'react-icons/fa';
import { IconContext } from 'react-icons';

const Welcome=()=>{

    return(
        <div className="icon-container">
        <IconContext.Provider value={{ color: 'white', size: '4rem' }}>
          <FaJetFighter />
        </IconContext.Provider>
      </div>
    )
}

export default Welcome