import React from 'react';
import Script from 'next/script'
import { Widget } from '@typeform/embed-react'






function Typeform() {
  return (
    <section className="about section-padding">
      <div className="container">
      <Widget
          id="frM3SvZ8"
          style= {{height: 500}}
          medium="demo-test"
          hidden={{ foo: 'foo value', bar: 'bar value' }}
          transitiveSearchParams={['foo', 'bar']}
        />
      </div>
    </section>
  )
}

export default Typeform