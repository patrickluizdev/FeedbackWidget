import { CloseButton } from "../CloseButton";
import bugImageUrl from "../../assets/bug.svg"
import ideaImageUrl from "../../assets/idea.svg"
import thoughtImageUrl from "../../assets/thought.svg"
import { useState } from "react";

const feedbackTypes = {
  BUG: {
    title: "Problema",
    image: {
      source: bugImageUrl,
      alt: 'Imagem de um inseto'
    }
  },
  IDEA: {
    title: "Ideia",
    image: {
      source: ideaImageUrl,
      alt: 'Imagem de uma lâmpada'
    }
  },
  OTHER: {
    title: "Outro",
    image: {
      source: thoughtImageUrl,
      alt: 'Imagem de uma nuvem de pensamentos'
    }
  }
}

type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm(){
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  return (
    <div className='bg-dark-surface-primary p-4 relative rounded-2xl  flex flex-col items-center shadow-lg mb-2 w-[calc(100vw-2rem)] md:w-auto'>
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>
        <CloseButton/>
      </header>
        {!feedbackType ? (
          <div className="flex py-8  gap-2 w-full">
            { Object.entries(feedbackTypes).map(([key, value]) => {
              return(
                <button 
                  key={key}
                  className="bg-dark-surface-secondary rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-hover focus:border-brand-hover focus:outline-none"
                  onClick={() => setFeedbackType(key as FeedbackType)}
                  type="button"
                >
                  <img src={value.image.source} alt={value.image.alt} />
                  <span>{value.title}</span>
                </button>
              );
            }) }
          </div>
        ) : (
          <span> .... </span>
        )
      }
      <footer className="text-xs ">
        Design fornecido pela Rocketseat desenvolvido com ♥ por <a className="underline underline-offset-2 outline-none hover:text-brand-hover focus:text-brand-hover" target="_blank" href="https://patrickluiz.tech">Patrick Luiz</a>
      </footer>
    </div>
  )
}