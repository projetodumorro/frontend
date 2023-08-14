import FormularioItem from '../formularioItem/FormularioItem';
import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';
import './ModalItem.css'

function ModalItem() {
  return (
    <>
      <Popup 
      trigger={<button className='border rounded px-4 hover:bg-white hover:text-indigo-800'>Novo item</button>} modal>
        <div>
          <FormularioItem />
        </div>
      </Popup>
    </>
  );
}

export default ModalItem;