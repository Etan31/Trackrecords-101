import ICDrag from './../assets/img/icons/ic_drag.svg';

const FinancialNote = () => {
   return (
      <section className="note-financial">
         <h2 className="note_header">Notes</h2>
         <li className="notes_list">
            <ul>
               <img className="ic_drag" src={ICDrag} alt="drag icon" />
               <p>This is sample list, a very long one.</p>
            </ul>
            <ul>
               <img className="ic_drag" src={ICDrag} alt="drag icon" />
               <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad facilis quam, id asperiores pariatur, quia adipisci ratione harum minus delectus.</p>
            </ul>
               <ul>
               <img className="ic_drag" src={ICDrag} alt="drag icon" />
               <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad facilis quam, id asperiores pariatur, quia adipisci ratione harum minus delectus.</p>
            </ul>
         </li>
      </section>
   );
}
 
export default FinancialNote;