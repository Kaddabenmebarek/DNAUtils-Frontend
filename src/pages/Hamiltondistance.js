import React, {useState, useEffect} from 'react';
import axios from 'axios'

export default function Hamilton() {

  const [seq, setSeq] = useState([{}])
  const [fasta_id, setFasta_id] = useState('')
  const [seq2, setSeq2] = useState([{}]) 
  const [hdresult, setHdresult] = useState('')
 
  const getHamiltonDistance = () => {
    setHdresult('')
    axios.post('http://localhost:8000/api/dna/utils/hamilton_distance/', { 'fasta_id': fasta_id,'seq': seq,'seq2': seq2 })
    .then(res => setHdresult(res.data))
  };

  return <div>
        <div className='App list-group-item justify-content-center align-items center mx-auto' style={{"width":"800px", "backgroundColor":"white", "marginTop":"15px"}}>
          <h4 className='card text-white bg-info mb-1' styleName="max-width: 20rem">
            Hamilton Distance
            </h4>
            <div className='card-body'>
              <span className="card-text">
                <label for="seqTextarea">Sequence 1</label>
                <textarea class="mb-2 form-control seq1In" id="seq1Textarea" rows="3"
                onChange={event => setSeq(event.target.value)}></textarea>
                <label for="seqTextarea">Sequence 2</label>
                <textarea class="mb-2 form-control seq2In" id="seq2Textarea" rows="3"
                onChange={event => setSeq2(event.target.value)}></textarea>
                <button className="btn btn-outline-primary mx-2 mb-3" 
                style={{'borderRadius':'50px',"font-weight":"bold"}}
                onClick={getHamiltonDistance}>Get Hamilton Distance</button>
              </span>
              <h5 className="card text-white bg-success mb-3">Result</h5>
              <div >
              <div>
                { hdresult && <p>{hdresult}</p> }
              </div>                
              </div>
            </div>
        </div>
</div>
}
