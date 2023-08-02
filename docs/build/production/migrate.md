---
title: "Migrate"
slug: "migrate"
---

Migrating is primarily used when users need to transition from an old version of Roller CLI to a newly installed version. This command facilitates the migration of configurations, ensuring that users don't need to manually recreate their existing configurations in the new version.

While it's also possible to reinitialize the software or just restart the Roller if no configuration changes have been made, using roller migrate is the recommended approach to handle any necessary changes seamlessly.

The followning command does not take any arguments:

```
roller migrate
```

After running this command, Roller CLI tool handles the rest.

### Migrate functionality

When you run the roller migrate command, the Roller CLI tool automatically:

-   Identifies the current installed version of the Roller CLI tool.
-   Compares the current version with the version from which you're migrating.
-   Identifies any changes in the configuration settings between the two versions.
-   Applies these changes to the new version of Roller CLI tool without deleting or overwriting any existing configuration that's compatible with the new version.

### Note

Please keep the following in mind:

-   Always backup your existing configurations before running the roller migrate command. Although the migration process is designed to preserve your configurations, it's good practice to keep a backup.
-   If no significant configuration changes have been made since the last version, simply restarting the Roller CLI tool should work. However, it's always recommended to run roller migrate after an update to ensure compatibility and stability.
