# Serializer Plugin for Snapshot Tests

This is a useful serializer plugin for [__Jest snapshot testing__][1] to give more readable snapshot outputs and improve your tests based on the [__Testing Best Practices__][2], and which uses the [__Pretty Format__][2] library.



[1]: https://jestjs.io/docs/snapshot-testing
[2]: https://github.com/goldbergyoni/javascript-testing-best-practices#-%EF%B8%8F-18-if-needed-use-only-short--inline-snapshots
[3]: https://www.npmjs.com/package/pretty-format

## Usage

For the moment, you can use it by doing a fork and installing the dependencies or by copying the snapshotSerializer.<br>
You will need to configure it in your Jest configuration file.<br>
Here's an example:

![Jest config file property with the name "snapshotSerializer" that require an array with one or more strings that references to plugin](/public/jest-config.webp)

Once you have configured the plugin, any snapshot tests that are run with Jest will use the pretty-format serializer.

## Example

Here's an example test that uses the serializer to generate a more readable snapshot output:

![Alt text](/public/serializer-test.webp)

As you can see, the output is much easier to read and understand than the default snapshot output.<br>
Also, with this plugin we filter useless attributes and we avoid to update the snapshot any time we have modified the attributes.


## Customization of filtered attributes

You can to exclude certain attributes from the serialized output. You can do this by adding the attributes to the VALID_ATTRIBUTES constant of the serializer.

![A constant array named 'VALID_ATTRIBUTES' where only has one string by default the 'data-testid' attribute](/public/valid-attributes.webp)

## Conclusion

With the snapshot serializer plugin using pretty-format, Jest snapshot tests become much more readable and easier to understand. In addition, we filter out the attributes that are not needed to avoid having to update the snapshot every time we modify the attributes of an element. You can tailor the output to your specific needs.

