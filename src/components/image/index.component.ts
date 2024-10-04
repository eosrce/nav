// 开源项目，未经作者同意，不得以抄袭/复制代码/修改源代码版权信息。
// Copyright @ 2018-present xiejiahe. All rights reserved.
// See https://github.com/xjh22222228/nav

import { Component, Input } from '@angular/core'
import { components } from 'src/store'
import { ComponentType, IComponentProps } from 'src/types'
import event from 'src/utils/mitt'

@Component({
  selector: 'app-image',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class ImageComponent {
  @Input() data!: IComponentProps
  component: Record<string, any> = {}

  constructor() {}

  ngOnInit() {
    this.init()
    event.on('COMPONENT_OK', this.init.bind(this))
  }

  init() {
    const data = components.find(
      (item) => item.type === ComponentType.Image && item.id === this.data.id
    )
    this.component = data || {}
  }
}
