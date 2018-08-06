# Firebase data model needs

At the bare minimum, we need:
- users
  - *create*
  - *delete*
- groups
  - *create*
  - *delete*
- issues
  - *create*
  - *delete*
- arguments
  - *create*
  - *delete*
  - vote
    - *create*
    - *delete*

The relations between these models are:
- users can be part of multiple groups - group memberships
- users can create multiple issues
- issues exist in one group - groups have multiple issues
- users can create multiple arguments on an issue
- issues can have multiple arguments
- users can vote on an argument
