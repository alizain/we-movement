import React, { Component } from "react"
import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody,
} from "react-accessible-accordion"

function AgreeOrDisagree({ }) {
  return (
    <div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
      <button type="button" class="btn">Strongly Agree</button>
      <button type="button" class="btn">Agree</button>
      <button type="button" class="btn">Neutral</button>
      <button type="button" class="btn">Disagree</button>
      <button type="button" class="btn">Strongly Disagree</button>
    </div>
  )
}

function PageTitle({ }) {
  return (
    <section class="mt-6 mb-5">
      <h1>Should we implement Net Neutrality</h1>
    </section>
  )
}

function PageContent({ }) {
  return [
    <section class="mb-5">
      <h3>The Background</h3>
      <p>Net neutrality is the principle that Internet service providers treat all data on the Internet equally, and not discriminate or charge differently by user, content, website, platform, application, type of attached equipment, or method of communication. For instance, under these principles, internet service providers are unable to intentionally block, slow down or charge money for specific websites and online content.</p>
    </section>,
    <section class="mb-5">
      <h3>The Arguments</h3>
      <Accordion>
        <AccordionItem>
          <AccordionItemTitle>
            <p><strong>By charging websites for access, network owners may be able to block competitor Web sites and services, as well as refuse access to those unable to pay</strong></p>
          </AccordionItemTitle>
          <AccordionItemBody>
            <AgreeOrDisagree />
            <p>Body content</p>
          </AccordionItemBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemTitle>
            <p><strong>Some other reason</strong></p>
            <p>With a bit of description</p>
          </AccordionItemTitle>
          <AccordionItemBody>
            <p>Body content</p>
          </AccordionItemBody>
        </AccordionItem>
      </Accordion>
    </section>
  ]
}

class App extends Component {
  render() {
    return (
      <main class="container">
        <div class="row justify-content-center">
          <div class="col-md-11 col-lg-9 col-xl-8">
            <header>
              <h3 class="logo">
                <a href="/"><strong><em>we</em></strong></a>
              </h3>
            </header>
            <PageTitle />
            <PageContent />
          </div>
        </div>
      </main>
    )
  }
}

export default App
