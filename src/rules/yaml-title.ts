import {Options, RuleType} from '../rules';
import RuleBuilder, {ExampleBuilder, OptionBuilderBase, TextOptionBuilder} from './rule-builder';
import dedent from 'ts-dedent';
import {escapeStringIfNecessaryAndPossible, formatYAML, initYAML} from '../utils/yaml';
import {ignoreListOfTypes, IgnoreTypes} from '../utils/ignore-types';
import {escapeDollarSigns, getFirstHeaderOneText} from '../utils/regex';
import {insert} from '../utils/strings';
import {t} from '../lang'

class YamlTitleOptions implements Options {
  @RuleBuilder.noSettingControl()
    fileName: string;

  @RuleBuilder.noSettingControl()
    defaultEscapeCharacter?: string = '"';

  titleKey?: string = 'title';
}

@RuleBuilder.register
export default class YamlTitle extends RuleBuilder<YamlTitleOptions> {
  get OptionsClass(): new () => YamlTitleOptions {
    return YamlTitleOptions;
  }
  get name(): string {
    return t('YAML Title');
  }
  get description(): string {
    return t('Inserts the title of the file into the YAML frontmatter. Gets the title from the first H1 or filename if there is no H1.');
  }
  get type(): RuleType {
    return RuleType.YAML;
  }
  apply(text: string, options: YamlTitleOptions): string {
    text = initYAML(text);
    let title = ignoreListOfTypes([IgnoreTypes.code, IgnoreTypes.math, IgnoreTypes.yaml, IgnoreTypes.tag], text, getFirstHeaderOneText);
    title = title || options.fileName;

    title = escapeStringIfNecessaryAndPossible(title, options.defaultEscapeCharacter);

    return formatYAML(text, (text) => {
      const title_match_str = `\n${options.titleKey}.*\n`;
      const title_match = new RegExp(title_match_str);
      if (title_match.test(text)) {
        text = text.replace(
            title_match,
            escapeDollarSigns(`\n${options.titleKey}: ${title}\n`),
        );
      } else {
        const yaml_end = text.indexOf('\n---');
        text = insert(text, yaml_end, `\n${options.titleKey}: ${title}`);
      }

      return text;
    });
  }
  get exampleBuilders(): ExampleBuilder<YamlTitleOptions>[] {
    return [
      new ExampleBuilder({
        description: 'Adds a header with the title from heading.',
        before: dedent`
          # Obsidian
        `,
        after: dedent`
          ---
          title: Obsidian
          ---
          # Obsidian
        `,
        options: {
          fileName: 'Filename',
        },
      }),
      new ExampleBuilder({
        description: 'Adds a header with the title.',
        before: dedent`
          ${''}
        `,
        after: dedent`
          ---
          title: Filename
          ---
          ${''}
        `,
        options: {
          fileName: 'Filename',
        },
      }),
      new ExampleBuilder({ // accounts for https://github.com/platers/obsidian-linter/issues/470
        description: 'Make sure that markdown links in headings are properly copied to the yaml as just the text',
        before: dedent`
          # This is a [Heading](test heading.md)
        `,
        after: dedent`
          ---
          title: This is a Heading
          ---
          # This is a [Heading](test heading.md)
        `,
      }),
    ];
  }
  get optionBuilders(): OptionBuilderBase<YamlTitleOptions>[] {
    return [
      new TextOptionBuilder({
        OptionsClass: YamlTitleOptions,
        name: 'Title Key',
        description: 'Which YAML key to use for title',
        optionsKey: 'titleKey',
      }),
    ];
  }
}
