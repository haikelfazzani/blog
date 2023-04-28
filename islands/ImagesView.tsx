import { useState } from "preact/hooks";

type ImageProp = {
  alt?: string
  images: string[]
}

export default function ImagesView({ alt = "", images }: ImageProp) {

  if (!images || images.length < 1) images.push('/bur.webp')

  const [imgIndex, setImgIndex] = useState(0)
  const [isOpen, setIsOpen] = useState(false);

  const onToggleModal = () => {
    const status = !isOpen;
    // document.body.style.overflow = status ? 'hidden' : 'auto';
    setIsOpen(status)
  }

  const onZoom = (index: number) => {
    setImgIndex(index)
    onToggleModal()
  }

  const onNext = () => {
    if (imgIndex < images.length - 1) setImgIndex(prev => prev + 1)
    else setImgIndex(0)
  }

  const onPrev = () => {
    if (imgIndex > 0) setImgIndex(prev => prev - 1)
    else setImgIndex(images.length - 1)
  }

  return <div class="img-view">
    <div class="w-100 grid-2">
      {images.map((img: string, i: number) => <div key={i} class="w-100" onClick={() => { onZoom(i) }}>
        <img class="w-100 cp" src={img} alt={alt} loading="lazy" />
      </div>)}
    </div>

    <div class="w-100 vh-100 align-center flex-column p-2" style={{
      position: 'fixed', top: 0, left: 0, zIndex: 999, background: '#0000007a',
      display: isOpen ? 'flex' : 'none',
      backdropFilter: 'blur(4px)'
    }}>
      <img class="scale" src={images[imgIndex]} alt={alt} style={{
        maxWidth: 'calc(100vw - 150px)',maxHeight: 'calc(100vh - 150px)', boxShadow: '0 4px 20px rgb(0 0 0 / 12%)'
      }} loading="lazy" />

      <div class='mt-3'>
        <button class='btn bg-transparent' onClick={onPrev}><i class="fa fa-arrow-left"></i></button>
        <button class='btn mr-3 bg-transparent' onClick={onNext}><i class="fa fa-arrow-right"></i></button>
        <button class="btn bg-transparent" onClick={onToggleModal}><i class="fa fa-times"></i></button>
      </div>

    </div>
  </div>
}