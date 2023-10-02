import re

token_patterns = [
    ('mention', '<@[0-9]+>'),
    ('mention_all', '@everyone'),
    ('emoji', '<:.+?:[0-9]+>'),
    ('text', '<(?![@:]).*?(?=<|$)|[^<@:]+')  # 使用正向否定断言来匹配不后跟@或:的<
]

def tokenizer(code):
    tokens = []
    combined_pattern = '|'.join('(?P<%s>%s)' % (name, pattern) for name, pattern in token_patterns)
    for match in re.finditer(combined_pattern, code):
        for name, pattern in token_patterns:
            if match.group(name):
                tokens.append((name, match.group(name)))
                break

    return tokens

if __name__ == "__main__":
    s = '<:avatar_xdbot:1133052388438188143><XDbot> <@1006777034564968498>  冷却中（1588.332s）'
    print(tokenizer(s))

