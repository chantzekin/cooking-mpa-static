//

import '@/styles/main.scss'
import './style.scss'

import _ from 'lodash'

var headerText = _.join(['About', 'Page'], ' ')
var headerEl = $('<h3 />').addClass('ui header').html(headerText)

$('body').append(headerEl)
