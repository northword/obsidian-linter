// 简体中文

export default {
  'commands': {
    'lint-file': {
      'name': 'Lint 当前文件',
      'error-message': 'Lint File Error in File',
    },
    'lint-file-unless-ignored': {
      'name': '除非被忽略，否则 Lint 此文件',
    },
    'lint-all-files': {
      'name': 'Lint 此库中的所有文件',
      'error-message': 'Lint All Files Error in File',
      'success-message': '已 Lint 所有文件',
      'errors-message-singular': '已完成所有文件的 Lint，存在 1 个错误。',
      'errors-message-plural': '已完成所有文件的 Lint，存在 {NUM} 个错误。',
      'start-message': '此操作将编辑所有的文件，可能会引入错误。',
      'submit-button-text': 'Lint 所有',
      'submit-button-notice-text': '正在 lint 所有文件...',
    },
    'lint-all-files-in-folder': {
      'name': 'Lint 当前文件夹中的所有文件',
      'start-message': '将修改 {FOLDER_NAME} 及其子目录的所有文件，这可能导致错误。',
      'submit-button-text': 'Lint {FOLDER_NAME} 目录的所有文件',
      'submit-button-notice-text': 'Lint {FOLDER_NAME} 目录所有文件...',
      'error-message': 'Lint All Files in Folder Error in File',
      'success-message': '成功 Lint {FOLDER_NAME} 目录的 {NUM} 个文件。',
      'message-singular': '已 Lint {FOLDER_NAME} 目录共 {NUM} 个文件，存在 1 个错误。',
      'message-plural': '已 Lint {FOLDER_NAME} 目录共 {NUM} 个文件，存在 {ERROR_COUNT} 个错误。',
    },
    'paste-as-plain-text': {
      'name': '粘贴为纯文本 & 无修改',
    },
    'lint-file-pop-up-menu-text': {
      'name': 'Lint 文件',
    },
    'lint-folder-pop-up-menu-text': {
      'name': 'Lint 文件夹',
    },
  },

  'logs': {
    'plugin-load': '插件已加载',
    'plugin-unload': '插件 Unload',
    'folder-lint': 'Linting 目录 ',
    'linter-run': 'linter 运行中',
    'paste-link-warning': '由于剪贴板内容为链接, 已中断对粘贴内容Lint, 以避免与其他插件发生冲突。',
    'see-console': '请在控制台 (Ctrl+Shift+I) 中查看详细信息.',
    'unknown-error': 'Lint 过程中发生了未知错误.',
    'moment-locale-not-found': '尝试将 Moment.js 的区域切换至 {MOMENT_LOCALE}, 当前 {CURRENT_LOCALE}',

    // rules-runner.ts
    'pre-rules': '常规规则之前的规则',
    'post-rules': '常规规则之后的规则',
    'rule-running': '规则运行中',
    'custom-regex': '自定义正则',
    'running-custom-regex': '自定义正则运行中',
    'running-custom-lint-command': '自定义 Lint 命令运行中',
    'custom-lint-duplicate-warning': '无法将同一命令 ("{COMMAND_NAME}") 作为自定义 Lint 命令重复运行。',
    'custom-lint-error-message': '自定义 Lint 命令',

    // rules-runner.ts and rule-builder.ts
    'disabled-text': '已被禁用',

    // rule-builder.ts
    'run-rule-text': '运行中...',

    // logger.ts
    'timing-key-not-found': 'timing key \'{TIMING_KEY}\' does not exist in the timing info list, so it was ignored',
    'milliseconds-abbreviation': 'ms',

    'invalid-date-format-error': `The format of the created date '{DATE}' could not be parsed or determined so the created date was left alone in '{FILE_NAME}'`,

    // yaml.ts
    'invalid-delimiter-error-message': 'delimiter is only allowed to be a single character',

    // mdast.ts
    'missing-footnote-error-message': `Footnote '{FOOTNOTE}' has no corresponding footnote reference before the footnote contents and cannot be processed. Please make sure that all footnotes have a corresponding reference before the content of the footnote.`,

    // rules.ts
    'wrapper-yaml-error': 'yaml 中存在错误: {ERROR_MESSAGE}',
    'wrapper-unknown-error': '未知错误: {ERROR_MESSAGE}',
  },

  'notice-text': {
    'empty-clipboard': '剪贴板无内容',
    'characters-added': '字符已添加',
    'characters-removed': '字符已移除',
  },

  // settings.ts
  'linter-title': 'Linter',
  'empty-search-results-text': '无匹配的设置项',

  // lint-confirmation-modal.ts
  'warning-text': '警告',
  'file-backup-text': '请确保您已经备份了文件！',

  'tabs': {
    'names': {
      // tab.ts
      'general': '常规设置项',
      'custom': '自定义设置项',
      'yaml': 'YAML 设置项',
      'heading': '标题设置项',
      'content': '脚注设置项',
      'footnote': '内容设置项',
      'spacing': '间距设置项',
      'paste': '粘贴设置项',
      'debug': '调试设置项',
    },
    // tab-searcher.ts
    'default-search-bar-text': '搜索设置项',
    'general': {
      // general-tab.ts
      'lint-on-save': {
        'name': '在保存时 lint',
        'description': '在手动保存文件 (当按下 `Ctrl + S` 或通过 vim 键绑定执行 `:w` 时) 时执行 lint。',
      },
      'display-message': {
        'name': '在 lint 时显示消息',
        'description': 'Lint 完成后显示更改的字符数。',
      },
      'folders-to-ignore': {
        'name': '排除文件夹',
        'description': 'Lint 所有文件或保存时 Lint 时需要排除的文件夹。每行填写一个路径。',
      },
      'override-locale': {
        'name': '覆盖区域设置',
        'description': '如果你想使用不同于默认的区域，请设置此项。',
      },
      'same-as-system-locale': '与系统区域设置 ({SYS_LOCALE}) 相同',
      'yaml-aliases-section-style': {
        'name': 'YAML 别名样式',
        'description': 'YAML 别名 (aliases) 部分的样式',
      },
      'yaml-tags-section-style': {
        'name': 'YAML 标签样式',
        'description': 'YAML 标签 (tags) 部分的样式',
      },
      'default-escape-character': {
        'name': '默认转义字符',
        'description': '当单引号和双引号不存在时, 用来转义YAML值的默认字符。',
      },
      'remove-unnecessary-escape-chars-in-multi-line-arrays': {
        'name': '在多行数组格式中删除不必要的转义字符',
        'description': '多行YAML数组的转义字符不需要和单行数组一样的转义，所以在多行格式中，删除不需要的额外转义符。',
      },
      'number-of-dollar-signs-to-indicate-math-block': {
        'name': '表示数学块的美元符号的数量',
        'description': '判断数学内容是一个数学块而不是内联（行间）数学的美元符号的数量',
      },
    },
    'debug': {
    // debug-tab.ts
      'log-level': {
        'name': '日志级别',
        'description': '将允许服务记录的日志等级。默认是错误 (ERROR)。',
      },
      'linter-config': {
        'name': 'Linter 配置',
        'description': '设置页面加载时, Linter的 data.json 的内容',
      },
      'log-collection': {
        'name': 'Lint 当前文件时收集日志 (包括由保存触发的 Lint)',
        'description': '当你 `Lint on save` 或 `linting 当前文件` 时, 会继续收集日志。这些日志对调试和创建 bug 报告有帮助。',
      },
      'linter-logs': {
        'name': 'Linter 日志',
        'description': '如果启用了日志，距离上一次触发 Lint 以来的日志。',
      },
    },
  },

  'options': {
    'custom-command': {
      // custom-command-option.ts
      'name': 'Custom Commands',
      'description': 'Custom commands are Obsidian commands that get run after the linter is finished running its regular rules. This means that they do not run before the YAML timestamp logic runs, so they can cause YAML timestamp to be triggered on the next run of the linter. You may only select an Obsidian command once. **_Note that this currently only works on linting the current file._**',
      'warning': 'When selecting an option, make sure to select the option either by using the mouse or by hitting the enter key. Other selection methods may not work and only selections of an actual Obsidian command or an empty string will be saved.',

      'add-input-button-text': 'Add new command',
      'command-search-placeholder-text': 'Obsidian command',
      'move-up-tooltip': 'Move up',
      'move-down-tooltip': 'Move down',
      'delete-tooltip': 'Delete',
    },
    'custom-replace': {
      // custom-replace-option.ts
      'name': 'Custom Regex Replacement',
      'description': 'Custom regex replacement can be used to replace anything that matches the find regex with the replacement value. The replace and find values will need to be valid regex values.',
      'warning': 'Use this with caution if you do not know regex. Also, please make sure that you do not use lookbehinds in your regex on iOS mobile as that will cause linting to fail since that is not supported on that platform.',
      'add-input-button-text': 'Add new regex replacement',
      'regex-to-find-placeholder-text': 'regex to find',
      'flags-placeholder-text': 'flags',
      'regex-to-replace-placeholder-text': 'regex to replace',
      'delete-tooltip': 'Delete',
    },
  },

  // rules
  'rules': {
    // auto-correct-common-misspellings.ts
    'auto-correct-common-misspellings': {
      'name': '自动纠正常见的拼写错误',
      'description': '通过一个常见拼写错误的字典，自动将它们转换为正确的拼写。参见[自动更正映射](https://github.com/platers/obsidian-linter/tree/master/src/utils/auto-correct-misspellings.ts)，以获得全部的自动更正单词列表。',
      'ignore-words': {
        'name': '忽略的单词',
        'description': '逗号分隔的小写单词列表，以便在自动更正时予以忽略',
      },
    },
    // blockquotify-on-paste.ts
    'add-blockquote-indentation-on-paste': {
      'name': 'Add Blockquote Indentation on Paste',
      'description': 'Adds blockquotes to all but the first line, when the cursor is in a blockquote/callout line during pasting',
    },
    // capitalize-headings.ts
    'capitalize-headings': {
      'name': '标题大写',
      'description': '标题字母应是大写的',
      'style': {
        'name': '风格',
        'description': '使用的大写风格',
      },
      'ignore-case-words': {
        'name': '忽略已大写的词',
        'description': '仅对全部都是小写的词应用标题大写样式',
      },
      'ignore-words': {
        'name': '忽略的单词',
        'description': '以逗号分隔的单词列表, 在本规则运行时这些词将会被忽略',
      },
      'lowercase-words': {
        'name': '小写词',
        'description': '一个逗号分隔的列表，这些词始终保持小写',
      },
    },
    // compact-yaml.ts
    'compact-yaml': {
      'name': 'Compact YAML',
      'description': 'Removes leading and trailing blank lines in the YAML front matter.',
      'inner-new-lines': {
        'name': 'Inner New Lines',
        'description': 'Remove new lines that are not at the start or the end of the YAML',
      },
    },
    // consecutive-blank-lines.ts
    'consecutive-blank-lines': {
      'name': 'Consecutive blank lines',
      'description': 'There should be at most one consecutive blank line.',
    },
    // convert-bullet-list-markers.ts
    'convert-bullet-list-markers': {
      'name': 'Convert Bullet List Markers',
      'description': 'Converts common bullet list marker symbols to markdown list markers.',
    },
    // convert-spaces-to-tabs.ts
    'convert-spaces-to-tabs': {
      'name': 'Convert Spaces to Tabs',
      'description': 'Converts leading spaces to tabs.',
      'tabsize': {
        'name': 'Tabsize',
        'description': 'Number of spaces that will be converted to a tab',
      },
    },
    // emphasis-style.ts
    'emphasis-style': {
      'name': 'Emphasis Style',
      'description': 'Makes sure the emphasis style is consistent.',
      'style': {
        'name': 'Style',
        'description': 'The style used to denote emphasized content',
      },
    },
    // empty-line-around-blockquotes.ts
    'empty-line-around-blockquotes': {
      'name': 'Empty Line Around Blockquotes',
      'description': 'Ensures that there is an empty line around blockquotes unless they start or end a document. **Note that an empty line is either one less level of nesting for blockquotes or a newline character.**',
    },
    // empty-line-around-code-fences.ts
    'empty-line-around-code-fences': {
      'name': 'Empty Line Around Code Fences',
      'description': 'Ensures that there is an empty line around code fences unless they start or end a document.',
    },
    // empty-line-around-math-block.ts
    'empty-line-around-math-blocks': {
      'name': 'Empty Line Around Math Blocks',
      'description': 'Ensures that there is an empty line around math blocks using `Number of Dollar Signs to Indicate a Math Block` to determine how many dollar signs indicates a math block for single-line math.',
    },
    // empty-line-around-tables.ts
    'empty-line-around-tables': {
      'name': 'Empty Line Around Tables',
      'description': 'Ensures that there is an empty line around github flavored tables unless they start or end a document.',
    },
    // escape-yaml-special-characters.ts
    'escape-yaml-special-characters': {
      'name': 'Escape YAML Special Characters',
      'description': 'Escapes colons with a space after them (: ), single quotes (\'), and double quotes (") in YAML.',
      'try-to-escape-single-line-arrays': {
        'name': 'Try to Escape Single Line Arrays',
        'description': 'Tries to escape array values assuming that an array starts with "[", ends with "]", and has items that are delimited by ",".',

      },
    },
    // file-name-heading.ts
    'file-name-heading': {
      'name': 'File Name Heading',
      'description': 'Inserts the file name as a H1 heading if no H1 heading exists.',
    },
    // footnote-after-punctuation.ts
    'footnote-after-punctuation': {
      'name': 'Footnote after Punctuation',
      'description': 'Ensures that footnote references are placed after punctuation, not before.',
    },
    // force-yaml-escape.ts
    'force-yaml-escape': {
      'name': 'Force YAML Escape',
      'description': 'Escapes the values for the specified YAML keys.',
      'force-yaml-escape-keys': {
        'name': 'Force YAML Escape on Keys',
        'description': 'Uses the YAML escape character on the specified YAML keys separated by a new line character if it is not already escaped. Do not use on YAML arrays.',
      },
    },
    // format-tags-in-yaml.ts
    'format-tags-in-yaml': {
      'name': 'Format Tags in YAML',
      'description': 'Remove Hashtags from tags in the YAML frontmatter, as they make the tags there invalid.',
    },
    // format-yaml-array.ts
    'format-yaml-array': {
      'name': 'Format Yaml Array',
      'description': 'Allows for the formatting of regular yaml arrays as either multi-line or single-line and `tags` and `aliases` are allowed to have some Obsidian specific yaml formats. Note that single string to single-line goes from a single string entry to a single-line array if more than 1 entry is present. The same is true for single string to multi-line except it becomes a multi-line array.',
      'alias-key': {
        'name': 'Format yaml aliases section',
        'description': 'Turns on formatting for the yaml aliases section. You should not enable this option alongside the rule `YAML Title Alias` as they may not work well together or they may have different format styles selected causing unexpected results.',
      },
      'tag-key': {
        'name': 'Format yaml tags section',
        'description': 'Turns on formatting for the yaml tags section.',
      },
      'default-array-style': {
        'name': 'Default yaml array section style',
        'description': 'The style of other yaml arrays that are not `tags`, `aliases` or  in `Force key values to be single-line arrays` and `Force key values to be multi-line arrays`',
      },
      'default-array-keys': {
        'name': 'Format yaml array sections',
        'description': 'Turns on formatting for regular yaml arrays',
      },
      'force-single-line-array-style': {
        'name': 'Force key values to be single-line arrays',
        'description': 'Forces the yaml array for the new line separated keys to be in single-line format (leave empty to disable this option)',
      },
      'force-multi-line-array-style': {
        'name': 'Force key values to be multi-line arrays',
        'description': 'Forces the yaml array for the new line separated keys to be in multi-line format (leave empty to disable this option)',
      },
    },
    // header-increment.ts
    'header-increment': {
      'name': 'Header Increment',
      'description': 'Heading levels should only increment by one level at a time',
      'start-at-h2': {
        'name': 'Start Header Increment at Heading Level 2',
        'description': 'Makes heading level 2 the minimum heading level in a file for header increment and shifts all headings accordingly so they increment starting with a level 2 heading.',
      },
    },
    // heading-blank-lines.ts
    'heading-blank-lines': {
      'name': 'Heading blank lines',
      'description': 'All headings have a blank line both before and after (except where the heading is at the beginning or end of the document).',
      'bottom': {
        'name': 'Bottom',
        'description': 'Insert a blank line after headings',
      },
      'empty-line-after-yaml': {
        'name': 'Empty Line Between Yaml and Header',
        'description': 'Keep the empty line between the Yaml frontmatter and header',
      },
    },
    // headings-start-line.ts
    'headings-start-line': {
      'name': 'Headings Start Line',
      'description': 'Headings that do not start a line will have their preceding whitespace removed to make sure they get recognized as headers.',
    },
    // insert-yaml-attributes.ts
    'insert-yaml-attributes': {
      'name': 'Insert YAML attributes',
      'description': 'Inserts the given YAML attributes into the YAML frontmatter. Put each attribute on a single line.',
      'text-to-insert': {
        'name': 'Text to insert',
        'description': 'Text to insert into the YAML frontmatter',
      },
    },
    // line-break-at-document-end.ts
    'line-break-at-document-end': {
      'name': 'Line Break at Document End',
      'description': 'Ensures that there is exactly one line break at the end of a document.',
    },
    // move-footnotes-to-the-bottom.ts
    'move-footnotes-to-the-bottom': {
      'name': 'Move Footnotes to the bottom',
      'description': 'Move all footnotes to the bottom of the document.',
    },
    // move-math-block-indicators-to-their-own-line.ts
    'move-math-block-indicators-to-their-own-line': {
      'name': 'Move Math Block Indicators to Their Own Line',
      'description': 'Move all starting and ending math block indicators to their own lines using `Number of Dollar Signs to Indicate a Math Block` to determine how many dollar signs indicates a math block for single-line math.',
    },
    // move-tags-to-yaml.ts
    'move-tags-to-yaml': {
      'name': 'Move Tags to Yaml',
      'description': 'Move all tags to Yaml frontmatter of the document.',
      'how-to-handle-existing-tags': {
        'name': 'Body tag operation',
        'description': 'What to do with non-ignored tags in the body of the file once they have been moved to the frontmatter',
      },
      'tags-to-ignore': {
        'name': 'Tags to ignore',
        'description': 'The tags that will not be moved to the tags array or removed from the body content if `Remove the hashtag from tags in content body` is enabled. Each tag should be on a new line and without the `#`. **Make sure not to include the hashtag in the tag name.**',
      },
    },
    // no-bare-urls.ts
    'no-bare-urls': {
      'name': 'No Bare URLs',
      'description': 'Encloses bare URLs with angle brackets except when enclosed in back ticks, square braces, or single or double quotes.',
    },
    // ordered-list-style.ts
    'ordered-list-style': {
      'name': 'Ordered List Style',
      'description': 'Makes sure that ordered lists follow the style specified. Note that 2 spaces or 1 tab is considered to be an indentation level.',
      'number-style': {
        'name': 'Number Style',
        'description': 'The number style used in ordered list indicators',
      },
      'list-end-style': {
        'name': 'Ordered List Indicator End Style',
        'description': 'The ending character of an ordered list indicator',
      },
    },
    // paragraph-blank-lines.ts
    'paragraph-blank-lines': {
      'name': 'Paragraph blank lines',
      'description': 'All paragraphs should have exactly one blank line both before and after.',
    },
    // prevent-double-checklist-indicator-on-paste.ts
    'prevent-double-checklist-indicator-on-paste': {
      'name': 'Prevent Double Checklist Indicator on Paste',
      'description': 'Removes starting checklist indicator from the text to paste if the line the cursor is on in the file has a checklist indicator',
    },
    // prevent-double-list-item-indicator-on-paste.ts
    'prevent-double-list-item-indicator-on-paste': {
      'name': 'Prevent Double List Item Indicator on Paste',
      'description': 'Removes starting list indicator from the text to paste if the line the cursor is on in the file has a list indicator',
    },
    // proper-ellipsis-on-paste.ts
    'proper-ellipsis-on-paste': {
      'name': 'Proper Ellipsis on Paste',
      'description': 'Replaces three consecutive dots with an ellipsis even if they have a space between them in the text to paste',
    },
    // proper-ellipsis.ts
    'proper-ellipsis': {
      'name': 'Proper Ellipsis',
      'description': 'Replaces three consecutive dots with an ellipsis.',
    },
    // re-index-footnotes.ts
    're-index-footnotes': {
      'name': 'Re-Index Footnotes',
      'description': 'Re-indexes footnote keys and footnote, based on the order of occurrence (NOTE: This rule deliberately does *not* preserve the relation between key and footnote, to be able to re-index duplicate keys.)',
    },
    // remove-consecutive-list-markers.ts
    'remove-consecutive-list-markers': {
      'name': 'Remove Consecutive List Markers',
      'description': 'Removes consecutive list markers. Useful when copy-pasting list items.',
    },
    // remove-empty-lines-between-list-markers-and-checklists.ts
    'remove-empty-lines-between-list-markers-and-checklists': {
      'name': 'Remove Empty Lines Between List Markers and Checklists',
      'description': 'There should not be any empty lines between list markers and checklists.',
    },
    // remove-empty-list-markers.ts
    'remove-empty-list-markers': {
      'name': 'Remove Empty List Markers',
      'description': 'Removes empty list markers, i.e. list items without content.',
    },
    // remove-hyphenated-line-breaks.ts
    'remove-hyphenated-line-breaks': {
      'name': 'Remove Hyphenated Line Breaks',
      'description': 'Removes hyphenated line breaks. Useful when pasting text from textbooks.',
    },
    // remove-hyphens-on-paste.ts
    'remove-hyphens-on-paste': {
      'name': 'Remove Hyphens on Paste',
      'description': 'Removes hyphens from the text to paste',
    },
    // remove-leading-or-trailing-whitespace-on-paste.ts
    'remove-leading-or-trailing-whitespace-on-paste': {
      'name': 'Remove Leading or Trailing Whitespace on Paste',
      'description': 'Removes any leading non-tab whitespace and all trailing whitespace for the text to paste',
    },
    // remove-leftover-footnotes-from-quote-on-paste.ts
    'remove-leftover-footnotes-from-quote-on-paste': {
      'name': 'Remove Leftover Footnotes from Quote on Paste',
      'description': 'Removes any leftover footnote references for the text to paste',
    },
    // remove-link-spacing.ts
    'remove-link-spacing': {
      'name': 'Remove link spacing',
      'description': 'Removes spacing around link text.',
    },
    // remove-multiple-blank-lines-on-paste.ts
    'remove-multiple-blank-lines-on-paste': {
      'name': 'Remove Multiple Blank Lines on Paste',
      'description': 'Condenses multiple blank lines down into one blank line for the text to paste',
    },
    // remove-multiple-spaces.ts
    'remove-multiple-spaces': {
      'name': 'Remove Multiple Spaces',
      'description': 'Removes two or more consecutive spaces. Ignores spaces at the beginning and ending of the line. ',
    },
    // remove-space-around-characters.ts
    'remove-space-around-characters': {
      'name': 'Remove Space around Characters',
      'description': 'Ensures that certain characters are not surrounded by whitespace (either single spaces or a tab). Note that this may causes issues with markdown format in some cases.',
      'include-fullwidth-forms': {
        'name': 'Include Fullwidth Forms',
        'description': 'Include <a href="https://en.wikipedia.org/wiki/Halfwidth_and_Fullwidth_Forms_(Unicode_block)">Fullwidth Forms Unicode block</a>',
      },
      'include-cjk-symbols-and-punctuation': {
        'name': 'Include CJK Symbols and Punctuation',
        'description': 'Include <a href="https://en.wikipedia.org/wiki/CJK_Symbols_and_Punctuation">CJK Symbols and Punctuation Unicode block</a>',
      },
      'include-dashes': {
        'name': 'Include Dashes',
        'description': 'Include en dash (–) and em dash (—)',
      },
      'other-symbols': {
        'name': 'Other symbols',
        'description': 'Other symbols to include',
      },
    },
    // remove-trailing-punctuation-in-heading.ts
    'remove-trailing-punctuation-in-heading': {
      'name': 'Remove Trailing Punctuation in Heading',
      'description': 'Removes the specified punctuation from the end of headings making sure to ignore the semicolon at the end of [HTML entity references](https://en.wikipedia.org/wiki/List_of_XML_and_HTML_character_entity_references).',
      'punctuation-to-remove': {
        'name': 'Trailing Punctuation',
        'description': 'The trailing punctuation to remove from the headings in the file.',
      },
    },
    // remove-yaml-keys.ts
    'remove-yaml-keys': {
      'name': 'Remove YAML Keys',
      'description': 'Removes the YAML keys specified',
      'yaml-keys-to-remove': {
        'name': 'YAML Keys to Remove',
        'description': 'The yaml keys to remove from the yaml frontmatter with or without colons',
      },
    },
    // space-after-list-markers.ts
    'space-after-list-markers': {
      'name': 'Space after list markers',
      'description': 'There should be a single space after list markers and checkboxes.',
    },
    // space-between-chinese-japanese-or-korean-and-english-or-numbers.ts
    'space-between-chinese-japanese-or-korean-and-english-or-numbers': {
      'name': 'Space between Chinese Japanese or Korean and English or numbers',
      'description': 'Ensures that Chinese, Japanese, or Korean and English or numbers are separated by a single space. Follows these [guidelines](https://github.com/sparanoid/chinese-copywriting-guidelines)',
    },
    // strong-style.ts
    'strong-style': {
      'name': 'Strong Style',
      'description': 'Makes sure the strong style is consistent.',
      'style': {
        'name': 'Style',
        'description': 'The style used to denote strong/bolded content',
      },
    },
    // trailing-spaces.ts
    'trailing-spaces': {
      'name': 'Trailing spaces',
      'description': 'Removes extra spaces after every line.',
      'twp-space-line-break': {
        'name': 'Two Space Linebreak',
        'description': 'Ignore two spaces followed by a line break ("Two Space Rule").',
      },
    },
    // two-spaces-between-lines-with-content.ts
    'two-spaces-between-lines-with-content': {
      'name': 'Two Spaces Between Lines with Content',
      'description': 'Makes sure that two spaces are added to the ends of lines with content continued on the next line for paragraphs, blockquotes, and list items',
    },
    // unordered-list-style.ts
    'unordered-list-style': {
      'name': 'Unordered List Style',
      'description': 'Makes sure that unordered lists follow the style specified.',
      'list-style': {
        'name': 'List item style',
        'description': 'The list item style to use in unordered lists',
      },
    },
    // yaml-key-sort.ts
    'yaml-key-sort': {
      'name': 'YAML Key Sort',
      'description': 'Sorts the YAML keys based on the order and priority specified. Note: may remove blank lines as well.',
      'yaml-key-priority-sort-order': {
        'name': 'YAML Key Priority Sort Order',
        'description': 'The order in which to sort keys with one on each line where it sorts in the order found in the list',
      },
      'priority-keys-at-start-of-yaml': {
        'name': 'Priority Keys at Start of YAML',
        'description': 'YAML Key Priority Sort Order is placed at the start of the YAML frontmatter',
      },
      'yaml-sort-order-for-other-keys': {
        'name': 'YAML Sort Order for Other Keys',
        'description': 'The way in which to sort the keys that are not found in the YAML Key Priority Sort Order text area',
      },
    },
    // yaml-timestamp.ts
    'yaml-timestamp': {
      'name': 'YAML Timestamp',
      'description': 'Keep track of the date the file was last edited in the YAML front matter. Gets dates from file metadata.',
      'date-created': {
        'name': 'Date Created',
        'description': 'Insert the file creation date',
      },
      'date-created-key': {
        'name': 'Date Created Key',
        'description': 'Which YAML key to use for creation date',
      },
      'force-retention-of-create-value': {
        'name': 'Force Date Created Key Value Retention',
        'description': 'Reuses the value in the YAML frontmatter for date created instead of the file metadata which is useful for preventing file metadata changes from causing the value to change to a different value.',
      },
      'date-modified': {
        'name': 'Date Modified',
        'description': 'Insert the date the file was last modified',
      },
      'date-modified-key': {
        'name': 'Date Modified Key',
        'description': 'Which YAML key to use for modification date',
      },
      'format': {
        'name': 'Format',
        'description': 'Moment date format to use (see [Moment format options](https://momentjscom.readthedocs.io/en/latest/moment/04-displaying/01-format/))',
      },
    },
    // yaml-title-alias.ts
    'yaml-title-alias': {
      'name': 'YAML Title Alias',
      'description': 'Inserts the title of the file into the YAML frontmatter\'s aliases section. Gets the title from the first H1 or filename.',
      'preserve-existing-alias-section-style': {
        'name': 'Preserve existing aliases section style',
        'description': 'If set, the `YAML aliases section style` setting applies only to the newly created sections',
      },
      'keep-alias-that-matches-the-filename': {
        'name': 'Keep alias that matches the filename',
        'description': 'Such aliases are usually redundant',
      },
      'use-yaml-key-to-keep-track-of-old-filename-or-heading': {
        'name': 'Use the YAML key `linter-yaml-title-alias` to help with filename and heading changes',
        'description': 'If set, when the first H1 heading changes or filename if first H1 is not present changes, then the old alias stored in this key will be replaced with the new value instead of just inserting a new entry in the aliases array',
      },
    },
    // yaml-title.ts
    'yaml-title': {
      'name': 'YAML Title',
      'description': 'Inserts the title of the file into the YAML frontmatter. Gets the title from the first H1 or filename if there is no H1.',
      'title-key': {
        'name': 'Title Key',
        'description': 'Which YAML key to use for title',
      },
    },
  },

  // These are the string values in the UI for enum values and thus they do not follow the key format as used above
  'enums': {
    'Title Case': '标题式大写 (Title Case)',
    'ALL CAPS': '全大写 (ALL CAPS)',
    'First letter': '句子式大写 (First letter)',
    '.': '.', // leave as is
    ')': ')', // leave as is
    'ERROR': 'error',
    'TRACE': 'trace',
    'DEBUG': 'debug',
    'INFO': 'info',
    'WARN': 'warn',
    'SILENT': 'silent',
    'ascending': 'ascending',
    'lazy': 'lazy',
    'Nothing': 'Nothing',
    'Remove hashtag': 'Remove hashtag',
    'Remove whole tag': 'Remove whole tag',
    'asterisk': 'asterisk',
    'underscore': 'underscore',
    'consistent': 'consistent',
    '-': '-', // leave as is
    '*': '*', // leave as is
    '+': '+', // leave as is
    'None': 'None',
    'Ascending Alphabetical': 'Ascending Alphabetical',
    'Descending Alphabetical': 'Descending Alphabetical',
    // yaml.ts
    'multi-line': 'multi-line',
    'single-line': 'single-line',
    'single string to single-line': 'single string to single-line',
    'single string to multi-line': 'single string to multi-line',
    'single string comma delimited': 'single string to multi-line',
    'single string space delimited': 'single string space delimited',
    'single-line space delimited': 'single-line space delimited',
  },
};
