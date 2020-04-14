import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import apiMd from '../../../md/test.md'

export default function Essay() {
    return (
        <div>
            随笔
            <ReactMarkdown
                source={apiMd}
                escapeHtml={false}
                renderers={{
                    code: CodeBlock,
                    heading: HeadingBlock
                }}
            />
        </div>
    )
}