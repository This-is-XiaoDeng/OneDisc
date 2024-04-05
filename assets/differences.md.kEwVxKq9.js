import{_ as t,c as e,o as d,a2 as o}from"./chunks/framework.CQ12TVIp.js";const _=JSON.parse('{"title":"标准偏差细节","description":"","frontmatter":{},"headers":[],"relativePath":"differences.md","filePath":"differences.md"}'),a={name:"differences.md"},r=o('<h1 id="标准偏差细节" tabindex="-1">标准偏差细节 <a class="header-anchor" href="#标准偏差细节" aria-label="Permalink to &quot;标准偏差细节&quot;">​</a></h1><blockquote><p>本页面是 OneDisc 实现与 OneBot V12 标准的偏差细节，与 OneBot V11 的偏差请查看 <a href="./diff-v11.html">本页面</a></p></blockquote><h2 id="支持受限的内容" tabindex="-1">支持受限的内容 <a class="header-anchor" href="#支持受限的内容" aria-label="Permalink to &quot;支持受限的内容&quot;">​</a></h2><h3 id="动作" tabindex="-1">动作 <a class="header-anchor" href="#动作" aria-label="Permalink to &quot;动作&quot;">​</a></h3><table><thead><tr><th>动作名</th><th>终结点</th><th>原因</th></tr></thead><tbody><tr><td>获取好友列表</td><td><code>get_friend_list</code></td><td>Discord Bot 没有好友功能，请求此动作将返回空列表</td></tr></tbody></table><h3 id="事件" tabindex="-1">事件 <a class="header-anchor" href="#事件" aria-label="Permalink to &quot;事件&quot;">​</a></h3><table><thead><tr><th>事件</th><th>说明</th></tr></thead><tbody><tr><td><code>notice.friend_increase</code></td><td>Discord Bot 没有好友功能</td></tr><tr><td><code>notice.friend_decrease</code></td><td>Discord Bot 没有好友功能</td></tr><tr><td><code>notice.channel_member_increase</code></td><td><code>discord.py</code> 未提供相关接口</td></tr><tr><td><code>notice.channel_member_decrease</code></td><td><code>discord.py</code> 未提供相关接口</td></tr></tbody></table><h4 id="与标准有差异的事件" tabindex="-1">与标准有差异的事件 <a class="header-anchor" href="#与标准有差异的事件" aria-label="Permalink to &quot;与标准有差异的事件&quot;">​</a></h4><table><thead><tr><th>事件</th><th>说明</th></tr></thead><tbody><tr><td><code>notice.group_member_increase</code></td><td>平台限制，无法判断加入成员是被邀请还是主动加入，<code>sub_type</code> 将依 <a href="./config.html#在事件中使用空字符串代替不支持的子类型-use-empty-for-unsupported-subtype">配置项</a> 填入空字符串或 <code>&quot;join&quot;</code></td></tr><tr><td><code>notice.group_member_decrease</code></td><td>平台限制，无法判断成员是主动离开还是被踢出，<code>sub_type</code> 将依 <a href="./config.html#在事件中使用空字符串代替不支持的子类型-use-empty-for-unsupported-subtype">配置项</a> 填入空字符串或 <code>&quot;leave&quot;</code></td></tr><tr><td><code>notice.guild_member_increase</code></td><td>同 <code>notice.group_member_increase</code></td></tr><tr><td><code>notice.guild_member_decrease</code></td><td>同 <code>notice.group_member_decrease</code></td></tr><tr><td><code>notice.channel_create</code></td><td>平台限制，无法获取操作者 ID，将填入<code>&quot;-1&quot;</code></td></tr><tr><td><code>notice.channel_delete</code></td><td>平台限制，无法获取操作者 ID，将填入<code>&quot;-1&quot;</code></td></tr><tr><td><code>notice.channel_message_delete</code></td><td>平台限制，无法判断消息为主动撤回还是被管理员撤回，<code>sub_type</code> 将依 <a href="./config.html#在事件中使用空字符串代替不支持的子类型-use-empty-for-unsupported-subtype">配置项</a> 填入空字符串或 <code>&quot;recall&quot;</code></td></tr><tr><td><code>notice.group_message_delete</code></td><td>同 <code>notice.channel_message_delete</code></td></tr><tr><td><code>notice.private_message_delete</code></td><td>同 <code>notice.channel_message_delete</code></td></tr></tbody></table><h3 id="消息段" tabindex="-1">消息段 <a class="header-anchor" href="#消息段" aria-label="Permalink to &quot;消息段&quot;">​</a></h3><table><thead><tr><th>消息段</th><th>说明</th></tr></thead><tbody><tr><td><code>voice</code> 语音</td><td><code>discord.py</code> 未提供相关接口，将以 <code>audio</code> 形式发送</td></tr></tbody></table><h2 id="拓展内容" tabindex="-1">拓展内容 <a class="header-anchor" href="#拓展内容" aria-label="Permalink to &quot;拓展内容&quot;">​</a></h2><blockquote><p><code>message</code> 类型为 OneBot V12 消息段，其余数据类型参考 Python3 数据类型</p></blockquote><h3 id="拓展动作" tabindex="-1">拓展动作 <a class="header-anchor" href="#拓展动作" aria-label="Permalink to &quot;拓展动作&quot;">​</a></h3><h4 id="edit-message-编辑消息" tabindex="-1"><code>edit_message</code> 编辑消息 <a class="header-anchor" href="#edit-message-编辑消息" aria-label="Permalink to &quot;`edit_message` 编辑消息&quot;">​</a></h4><table><thead><tr><th>参数</th><th>类型</th><th>必须</th><th>说明</th></tr></thead><tbody><tr><td><code>message_id</code></td><td>str</td><td>是</td><td>要编辑的消息 ID</td></tr><tr><td><code>content</code></td><td>message</td><td>是</td><td>消息内容</td></tr></tbody></table><p>本动作无响应数据</p><h3 id="拓展消息段" tabindex="-1">拓展消息段 <a class="header-anchor" href="#拓展消息段" aria-label="Permalink to &quot;拓展消息段&quot;">​</a></h3><h4 id="discord-emoji-自定义表情" tabindex="-1"><code>discord.emoji</code> 自定义表情 <a class="header-anchor" href="#discord-emoji-自定义表情" aria-label="Permalink to &quot;`discord.emoji` 自定义表情&quot;">​</a></h4><table><thead><tr><th>字段名</th><th>数据类型</th><th>说明</th></tr></thead><tbody><tr><td><code>name</code></td><td>str</td><td>自定义表情名称</td></tr><tr><td><code>id</code></td><td>int</td><td>表情 ID</td></tr></tbody></table><h4 id="discord-channel-频道" tabindex="-1"><code>discord.channel</code> 频道 <a class="header-anchor" href="#discord-channel-频道" aria-label="Permalink to &quot;`discord.channel` 频道&quot;">​</a></h4><table><thead><tr><th>字段名</th><th>数据类型</th><th>说明</th></tr></thead><tbody><tr><td><code>channel_id</code></td><td>str</td><td>频道 ID</td></tr></tbody></table><h4 id="discord-role-提及权限组" tabindex="-1"><code>discord.role</code> 提及权限组 <a class="header-anchor" href="#discord-role-提及权限组" aria-label="Permalink to &quot;`discord.role` 提及权限组&quot;">​</a></h4><table><thead><tr><th>字段名</th><th>数据类型</th><th>说明</th></tr></thead><tbody><tr><td><code>id</code></td><td>str</td><td>权限组 ID</td></tr></tbody></table><h4 id="discord-timestamp-时间" tabindex="-1"><code>discord.timestamp</code> 时间 <a class="header-anchor" href="#discord-timestamp-时间" aria-label="Permalink to &quot;`discord.timestamp` 时间&quot;">​</a></h4><table><thead><tr><th>字段名</th><th>数据类型</th><th>说明</th></tr></thead><tbody><tr><td><code>time</code></td><td>int</td><td>Unix 时间戳</td></tr><tr><td><code>style</code></td><td>str</td><td>时间格式，<a href="https://discord.com/developers/docs/reference#message-formatting-timestamp-styles" target="_blank" rel="noreferrer">参见</a></td></tr></tbody></table><h4 id="discord-navigation-navigation" tabindex="-1"><code>discord.navigation</code> Navigation <a class="header-anchor" href="#discord-navigation-navigation" aria-label="Permalink to &quot;`discord.navigation` Navigation&quot;">​</a></h4><table><thead><tr><th>字段名</th><th>数据类型</th><th>说明</th></tr></thead><tbody><tr><td><code>type</code></td><td>str</td><td><s>我不知道这是什么</s></td></tr></tbody></table><h4 id="discord-markdown-markdown" tabindex="-1"><code>discord.markdown</code> MarkDown <a class="header-anchor" href="#discord-markdown-markdown" aria-label="Permalink to &quot;`discord.markdown` MarkDown&quot;">​</a></h4><table><thead><tr><th>字段名</th><th>数据类型</th><th>说明</th></tr></thead><tbody><tr><td><code>data</code></td><td>str</td><td>MarkDown 内容，支持使用 <code>base64:// + b64编码</code></td></tr></tbody></table>',30),c=[r];function h(i,n,s,l,b,m){return d(),e("div",null,c)}const f=t(a,[["render",h]]);export{_ as __pageData,f as default};
