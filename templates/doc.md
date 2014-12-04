%Statistik für Jedermann
%Tamara Cook;Miles Tallon
<%_.forEach(units,function(unit){%>
# ${unit.title}: ${unit.subtitle}
${ unit.description}
<%_.forEach(unit.topics,function(topic){%>
## ${topic.title}: ${topic.subtitle}
<%if(_.contains(query.contents,"body")){%>${topic.body}<%}%>
<%if(_.contains(query.contents,"examples")){%>
### Beispiele
<%_.forEach(topic.examples,function(example){%>
#### ${example.title}
${example.body}
<%});%>
<%}%>
<%if(_.contains(query.contents,"extras")){%>
### Zusatzinfos
<%_.forEach(topic.extras,function(extra){%>
#### ${extra.title}
${extra.body}
<%});%>
<%}%>
<%});%>
<%});%>