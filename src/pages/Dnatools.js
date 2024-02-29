import React, {useState, useEffect} from 'react';
import axios from 'axios'

export default function Dnatools() {

  const [seq, setSeq] = useState([{}])
  const [fasta_id, setFasta_id] = useState('')
  const [dnaresult, setDnaresult] = useState('')

  
  const getReverseComp = () => {
    setDnaresult('')
    axios.post('https://dnautils-backend1.onrender.com/api/dna/utils/reverse_complement/', { 'fasta_id': fasta_id,'seq': seq })
    .then(res => setDnaresult(res.data))
  };

  const getNucFreq = () => {
    setDnaresult('')
    axios.post('https://dnautils-backend1.onrender.com/api/dna/utils/nucleotide_freq/', { 'fasta_id': fasta_id,'seq': seq })
      .then(res => setDnaresult(res.data))
  };

  const getCgContent = () => {
    setDnaresult('')
    axios.post('https://dnautils-backend1.onrender.com/api/dna/utils/cg_freq/', { 'fasta_id': fasta_id,'seq': seq })
      .then(res => setDnaresult(res.data))
  };

  const toAminoAcid = () => {
    setDnaresult('')
    axios.post('https://dnautils-backend1.onrender.com/api/dna/utils/translate_to_aminoacids/', { 'fasta_id': fasta_id,'seq': seq })
      .then(res => setDnaresult(res.data))
  };

  const toFrames = () => {
    setDnaresult('')
    axios.post('https://dnautils-backend1.onrender.com/api/dna/utils/toframes/', { 'fasta_id': fasta_id,'seq': seq })
      .then(res => setDnaresult(res.data))
  };

  return <div>
        <div className='App list-group-item justify-content-center align-items center mx-auto' style={{"width":"800px", "backgroundColor":"white", "marginTop":"15px"}}>
          <h4 className='card text-white bg-info mb-1' style={{"maxWidth": "20rem"}}>
            DNA Tools
            </h4>
            <div className='card-body'>
              <span className="card-text">
                <textarea className="mb-2 form-control seqIn" id="seqTextarea" rows="10"
                placeholder="Paste a valid DNA sequence here" onChange={event => setSeq(event.target.value)}></textarea>
                <button className="btn btn-outline-primary mx-2 mb-3" 
                style={{'borderRadius':'50px',"fontWeight":"bold"}} onClick={getReverseComp}>
                  Reversal Complement</button>
                <button className="btn btn-outline-primary mx-2 mb-3" 
                style={{'borderRadius':'50px',"fontWeight":"bold"}} onClick={getNucFreq}>
                  Nucleotide Frequence</button>
                <button className="btn btn-outline-primary mx-2 mb-3" 
                style={{'borderRadius':'50px',"fontWeight":"bold"}} onClick={getCgContent}>
                  CG Content</button>
                <button className="btn btn-outline-primary mx-2 mb-3" 
                style={{'borderRadius':'50px',"fontWeight":"bold"}} onClick={toAminoAcid}>
                  To Amino Acid</button>
                <button className="btn btn-outline-primary mx-2 mb-3" 
                style={{'borderRadius':'50px',"fontWeight":"bold"}} onClick={toFrames}>
                  Frames</button>
              </span>
              <h5 className="card text-white bg-success mb-3">Result</h5>
              <div>
                { dnaresult && <textarea className="mb-2 form-control seqIn" id="seqTextarea" rows="10">{dnaresult}</textarea> }
              </div>
            </div>
        </div>
</div>
}
