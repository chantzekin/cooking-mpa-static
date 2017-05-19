//

import './style.scss'

import { log } from '@/scripts/utils'

log('ok!')

$('.js-show-modal').on('click', () => {
  $('.foo-modal').modal('show')
})
