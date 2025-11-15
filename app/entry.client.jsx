import { startTransition } from 'react'
import { hydrateRoot } from 'react-dom/client'
import { HydratedRouter } from 'react-router/dom'

import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// Initialize FontAwesome library
import './utils/fontAwesomeLibrary'

startTransition(() => {
  hydrateRoot(document, <HydratedRouter />)
})
