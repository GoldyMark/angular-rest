# RESTFUL数据共享平台-----使用说明

### 简介
> 本应用是基于HTTP协议的轻量级的数据访问层，支持MySQL和PostgreSQL，目前只实现了HTTP **Get**方法。

###### 特性
1. 结合Java和HTTP API技术的一个SQL生成器
2. 使用一个简单的RESTful HTTP API 把数据库数据序列化生成json、xml和csv
3. 支持关系数据库表的一对一，一对多关系
4. 灵活、简单，只需会SQL即可发布自定义数据接口

--------------------------------------------------------------------------------------------------
### 资源:Resource
例子：**mll.nh_sum_r8**
~~~
<?xml version="1.0" encoding="UTF-8"?>
<rs:sqlResource xmlns:rs="http://restsql.org/schema"> ------------------------------------------1:sqlResource
<description>-----------------------------------------------------------------------------------2:description
<![CDATA[
查询南海区日雨量统计数据，用于ncl画图。
自动站点范围：(s.longitude between 112.5 and 113.5) ，(s.latitude between 22.5 and 23.5 )
---------------------------------------------------------------------------------
注意：
含有group by的例子最好使用<test></test>增加查询条件，缩小查询范围，从而减少元数据查询时间,
本范例在<test></test>中增加(datetime between '2014-05-01' and '2014-05-31')条件，用于减少查询范围
--------------------------------------------------------------------------------
使用范例：
[1.查询2014年4月合雨量]:http://10.151.96.18/restsql/rest/res/pretty/mll.nh_sum_r8?_filter=datetime+DURING+2014-04-01T00:00:00Z/2014-04-30T00:00:00Z&_output=csv
]]>
</description>
<test>------------------------------------------------------------------------------------------3:test
<![CDATA[
SELECT  station_id sid, s.name sn, s.longitude lon, s.latitude lat, sum(r8) sum_r8 ,count(r8) count_r8 FROM 
v_aws_day left join dict.v_station_cn s on s.id=station_id
	WHERE (s.longitude between 112.5 and 113.5) 
	AND (s.latitude between 22.5 and 23.5 )
	AND r8 is not null
	AND (datetime between '2014-04-01' and '2014-04-30')
And s.type = 'A'
And s.id not in ('G2186','G3152','G3256','G3157','G3249','G1088')
group by sid,sn,lon,lat
]]>
</test>
<query>------------------------------------------------------------------------------------------4:query
<![CDATA[
SELECT  station_id sid, s.name sn, s.longitude lon, s.latitude lat, sum(r8) sum_r8 ,count(r8) count_r8 FROM 
        v_aws_day left join dict.v_station_cn s on s.id=station_id
WHERE (s.longitude between 112.5 and 113.5) 
	AND (s.latitude between 22.5 and 23.5 )
	AND r8 is not null
    AND s.type = 'A'
    AND s.id not in ('G2186','G3152','G3256','G3157','G3249','G1088')
group by sid,sn,lon,lat
]]>
</query>
<metadata>---------------------------------------------------------------------------------------5:metadata
<database default="meteo"/>----------------------------------------------------------------------6:database
<table name="v_aws_day" role="Parent"/>----------------------------------------------------------7:table
<table name="dict.v_station_cn" role="ParentExtension" />
</metadata>
<validatedAttribute name="lon" type="Numeric"  format="0.0000" />------------------------8:validateAttribute
<validatedAttribute name="lat" type="Numeric"  format="0.0000" />
<validatedAttribute name="sum_r8" type="Numeric"  format="0.0" />
</rs:sqlResource>
~~~

###### 说明
>	1:**sqlResource**  XML Root Element 格式固定

>	2:**description**  非必需 出现次数：0或1	用于说明本资源如何使用

>	3:**test**	非必需 出现次数：0或1	用于生成元数据，当**test**存在，使用**test**生成元数据，否则使用**query**;<br />
>		**元数据SQL** = test 或 query的值 + "Limit 1 Offset 0" ;<br />
>		**元数据** 为上述SQL执行结果的列的元数据：metadata；<br />
>		当SQL语句包含**group by**时最好使用**test**增加查询条件，缩小查询范围，从而减少元数据查询时间

>	4:**query** 必需 出现次数：1 	结构必需与**test**一致，只是相对少部分过滤条件;<br />
>		SQL语句构造使用**query**生成

>	5:**metadata**	必需 出现次数：1   数据表的元数据

>	6:**database**	必需 出现次数：1 	数据库名称

>	7:**table**	必需 出现次数：1或多次 	数据库表<br />
>		**name** 表名；**role**可为:**Parent,ParentExtension,Child,ChildExtension,Join**<br />
>		**role**=**Parent**的表必需存在;**Parent,ParentExtension**为1对1关系;**Parent,Child**为1对多关系;**Join**用于多对多

>	8:**validateAttribute** 非必需 出现次数：0或1或多次 	用于格式化数据输出<br />
>		**name**对应列名；**type**可为：**Numeric,String,Datetime**<br />
>		**format** pattern;日期数据datetime格式化后类型为String，非格式化日期数据类型为Long;更多请查看:<br />
>		[java.text.DecimalFormat](http://download.oracle.com/technetwork/java/javase/6/docs/zh/api/java/text/DecimalFormat.html)<br />
>		[java.text.SimpleDateFormat](http://download.oracle.com/technetwork/java/javase/6/docs/zh/api/java/text/SimpleDateFormat.html)

###### 备注
>	**description,test,query,metadata,validateAttribute**出现的次序是固定的<br />
>		定义资源Resource更详细资料可查看：[SqlResource Schema](SqlResource.xsd),这需要一点xml的知识

---------------------------------------------------------------------------------------------------------------
