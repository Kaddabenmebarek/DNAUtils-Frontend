import React, {useState, useEffect} from 'react';
import DnaView from './DnaListView';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Collectseq() {

  const [dnaList, setDnaList] = useState([{}])
  const [fasta_id, setFasta_id] = useState('')
  const [seq, setSeq] = useState([{}])

  useEffect(() => {
    axios.get('http://localhost:8000/api/dna')
      .then(res => {
        setDnaList(res.data)
      })
  });

  const addDnaHandler = () => {
    axios.post('http://localhost:8000/api/dna/', { 'fasta_id': fasta_id, 'seq': seq })
      .then(res => console.log(res))
  };

  return (
    <div>
      <div className='App list-group-item justify-content-center align-items center mx-auto' style={{"width":"800px", "backgroundColor":"white", "marginTop":"15px"}}>
        <h4 className='card text-white bg-info mb-1' styleName="max-width: 20rem">
          Collect sequence
          </h4>
          <div className='card-body'>
            <span className="card-text"> 
              <input className="mt-4 mb-2 form-control fasta_idIn" placeholder='FASTA Id' onChange={event => setFasta_id(event.target.value)}/> 
              <label for="seqTextarea">Sequence</label>
              <textarea class="mb-2 form-control seqIn" id="seqTextarea" rows="3" onChange={event => setSeq(event.target.value)}></textarea>
              <button className="btn btn-outline-primary mx-2 mb-3" style={{'borderRadius':'50px',"font-weight":"bold"}}
                onClick={addDnaHandler}>
                Add Sequence
              </button>
            </span>
            <h5 className="card text-white bg-success mb-3">DNA List</h5>
            <div >
              <DnaView dnaList={dnaList} />
            </div>
          </div>
        
      </div>
    </div>
  );
}