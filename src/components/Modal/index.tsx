type IModal = {
  toggle: boolean;
  changeToggle: () => void;
  image: string;
  description: string;
  name: string;
  tags: string[];  
}

export default function Modal({
  image,
  description,
  name,
  tags, 
  toggle, 
  changeToggle 
}: IModal) {
  return (
    <div className="modal">
      <button 
        className="modal-button__close"
        type="button" 
        aria-label="Close" 
        onClick={() => changeToggle}>
          X
      </button>

      <img src={image} alt={name} className="modal-image"/>
      <p className="modal-description">{description}</p>
      <p className="modal-tags">{ tags.map((tag, index) => 
        <span key={index} className="modal-tag">{tag}</span>)}
      </p>
      <button className="modal-button__demo" type="button" aria-label="Go to demo">DEMO</button>
      <button className="modal-button__github" type="button" aria-label="Go to github">GITHUB</button>
    </div>
  )
}
