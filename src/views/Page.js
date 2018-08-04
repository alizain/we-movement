import React from "react"
import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody,
} from "react-accessible-accordion"

export default function Page({ title, background, args }) {
  return [
    <section className="mt-4 mb-6">
      <h1 className="mb-0">{title}</h1>
    </section>,
    <section className="mb-6">
      <h3 className="mb-1">The Background</h3>
      {background}
    </section>,
    <section className="mb-6">
      <h3 className="mb-1">The Arguments</h3>
      <ArgumentList args={args} />
    </section>,
  ]
}

function ArgumentList({ args }) {
  return (
    <Accordion>{args.map((argument) => <ArgumentListItem {...argument} />)}</Accordion>
  )
}

function ArgumentListItem({ title, body }) {
  return (
    <AccordionItem hideBodyClassName="accordion__item--collapsed">
      <AccordionItemTitle>
        {title}
      </AccordionItemTitle>
      <AccordionItemBody hideBodyClassName="">
        <AgreeOrDisagree />
        {body}
      </AccordionItemBody>
    </AccordionItem>
  )
}

function AgreeOrDisagree() {
  return (
    <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
      <button type="button" className="btn btn-strong-agree">
        Strongly Agree
      </button>
      <button type="button" className="btn btn-agree">
        Agree
      </button>
      <button type="button" className="btn btn-neutral">
        Neutral
      </button>
      <button type="button" className="btn btn-disagree">
        Disagree
      </button>
      <button type="button" className="btn btn-strong-disagree">
        Strongly Disagree
      </button>
    </div>
  )
}
