 /* 편성비중 조회 - 편성시간  */
 <!-- C2007032801000000873_편성업무 전산화 개발의 건 -->
 <!-- C201001220_조직체계개편               -->
  <dco-statement name="retrieveMClassFormationGravity">
  <![CDATA[


///////////////////      ////////////////// 최종적으로 보내야 할 값들

     SELECT B.BUMUN_NM, B.TEAM_NM, B.MCLASS_NAME, Z.ORD,
           A.TARGET_TIME,
           C.MCLASS_1_TIME,
           C.MCLASS_2_TIME,
           C.MCLASS_3_TIME,
           C.MCLASS_4_TIME,
           C.MCLASS_5_TIME,
           C.MCLASS_6_TIME,
           C.MCLASS_7_TIME,
           C.MCLASS_8_TIME,
           C.MCLASS_9_TIME,
           C.MCLASS_10_TIME,
           ROUND(DECODE(A.TARGET_TIME_SUM,0,0,A.TARGET_TIME/A.TARGET_TIME_SUM)*100,1) AS TARGET_TIME_RATE,
           ROUND(DECODE(C.MCLASS_1_TIME_SUM,0,0,C.MCLASS_1_TIME/C.MCLASS_1_TIME_SUM)*100,1) AS MCLASS_1_RATE,
           ROUND(DECODE(C.MCLASS_2_TIME_SUM,0,0,C.MCLASS_2_TIME/C.MCLASS_2_TIME_SUM)*100,1) AS MCLASS_2_RATE,
           ROUND(DECODE(C.MCLASS_3_TIME_SUM,0,0,C.MCLASS_3_TIME/C.MCLASS_3_TIME_SUM)*100,1) AS MCLASS_3_RATE,
           ROUND(DECODE(C.MCLASS_4_TIME_SUM,0,0,C.MCLASS_4_TIME/C.MCLASS_4_TIME_SUM)*100,1) AS MCLASS_4_RATE,
           ROUND(DECODE(C.MCLASS_5_TIME_SUM,0,0,C.MCLASS_5_TIME/C.MCLASS_5_TIME_SUM)*100,1) AS MCLASS_5_RATE,
           ROUND(DECODE(C.MCLASS_6_TIME_SUM,0,0,C.MCLASS_6_TIME/C.MCLASS_6_TIME_SUM)*100,1) AS MCLASS_6_RATE,
           ROUND(DECODE(C.MCLASS_7_TIME_SUM,0,0,C.MCLASS_7_TIME/C.MCLASS_7_TIME_SUM)*100,1) AS MCLASS_7_RATE,
           ROUND(DECODE(C.MCLASS_8_TIME_SUM,0,0,C.MCLASS_8_TIME/C.MCLASS_8_TIME_SUM)*100,1) AS MCLASS_8_RATE,
           ROUND(DECODE(C.MCLASS_9_TIME_SUM,0,0,C.MCLASS_9_TIME/C.MCLASS_9_TIME_SUM)*100,1) AS MCLASS_9_RATE,
           ROUND(DECODE(C.MCLASS_10_TIME_SUM,0,0,C.MCLASS_10_TIME/C.MCLASS_10_TIME_SUM)*100,1) AS MCLASS_10_RATE,

           ROUND(DECODE(C.MCLASS_W_TIME_SUM,0,0,C.MCLASS_TIME_WSUM/C.MCLASS_W_TIME_SUM)*100,1) AS MCLASS_W_RATE,
           ROUND(DECODE(E.MCLASS_M_TIME_SUM,0,0,E.MCLASS_TIME_MSUM/E.MCLASS_M_TIME_SUM)*100,1) AS MCLASS_M_RATE,

           C.MCLASS_TIME_WSUM,
           E.MCLASS_TIME_MSUM,

           ROUND(DECODE(A.TARGET_TIME_SUM,0,0,A.TARGET_TIME/A.TARGET_TIME_SUM)*100,1) -
             ROUND(DECODE(E.MCLASS_M_TIME_SUM,0,0,E.MCLASS_TIME_MSUM/E.MCLASS_M_TIME_SUM)*100,1) AS MCLASS_RATE,  /* 계획대비 */

           D.ITEM_1_TIME,
           D.ITEM_2_TIME,
           D.ITEM_3_TIME,
           D.ITEM_4_TIME,
           D.ITEM_5_TIME,
           D.ITEM_6_TIME,
           D.ITEM_7_TIME,
           D.ITEM_8_TIME,
           D.ITEM_9_TIME,
           D.ITEM_10_TIME,

           ROUND(DECODE(D.ITEM_1_TIME_SUM,0,0,D.ITEM_1_TIME/D.ITEM_1_TIME_SUM)*100,1) AS ITEM_1_RATE,
           ROUND(DECODE(D.ITEM_2_TIME_SUM,0,0,D.ITEM_2_TIME/D.ITEM_2_TIME_SUM)*100,1) AS ITEM_2_RATE,
           ROUND(DECODE(D.ITEM_3_TIME_SUM,0,0,D.ITEM_3_TIME/D.ITEM_3_TIME_SUM)*100,1) AS ITEM_3_RATE,
           ROUND(DECODE(D.ITEM_4_TIME_SUM,0,0,D.ITEM_4_TIME/D.ITEM_4_TIME_SUM)*100,1) AS ITEM_4_RATE,
           ROUND(DECODE(D.ITEM_5_TIME_SUM,0,0,D.ITEM_5_TIME/D.ITEM_5_TIME_SUM)*100,1) AS ITEM_5_RATE,
           ROUND(DECODE(D.ITEM_6_TIME_SUM,0,0,D.ITEM_6_TIME/D.ITEM_6_TIME_SUM)*100,1) AS ITEM_6_RATE,
           ROUND(DECODE(D.ITEM_7_TIME_SUM,0,0,D.ITEM_3_TIME/D.ITEM_7_TIME_SUM)*100,1) AS ITEM_7_RATE,
           ROUND(DECODE(D.ITEM_8_TIME_SUM,0,0,D.ITEM_4_TIME/D.ITEM_8_TIME_SUM)*100,1) AS ITEM_8_RATE,
           ROUND(DECODE(D.ITEM_9_TIME_SUM,0,0,D.ITEM_5_TIME/D.ITEM_9_TIME_SUM)*100,1) AS ITEM_9_RATE,
           ROUND(DECODE(D.ITEM_10_TIME_SUM,0,0,D.ITEM_6_TIME/D.ITEM_10_TIME_SUM)*100,1) AS ITEM_10_RATE,

           ROUND(DECODE(D.ITEM_W_TIME_SUM,0,0,D.ITEM_TIME_WSUM/D.ITEM_W_TIME_SUM)*100,1) AS ITEM_W_RATE,
           ROUND(DECODE(F.ITEM_M_TIME_SUM,0,0,F.ITEM_TIME_MSUM/F.ITEM_M_TIME_SUM)*100,1) AS ITEM_M_RATE,

           D.ITEM_TIME_WSUM,
           F.ITEM_TIME_MSUM,
           ROUND(DECODE(F.ITEM_M_TIME_SUM,0,0,F.ITEM_TIME_MSUM/F.ITEM_M_TIME_SUM)*100,1) -
             ROUND(DECODE(A.TARGET_TIME_SUM,0,0,A.TARGET_TIME/A.TARGET_TIME_SUM)*100,1) AS ITEM_RATE,  /* 계획대비 */

           D.ITEM_1_CNT,
           D.ITEM_2_CNT,
           D.ITEM_3_CNT,
           D.ITEM_4_CNT,
           D.ITEM_5_CNT,
           D.ITEM_6_CNT,
           D.ITEM_7_CNT,
           D.ITEM_8_CNT,
           D.ITEM_9_CNT,
           D.ITEM_10_CNT,
           D.ITEM_1_CNT+D.ITEM_2_CNT+D.ITEM_3_CNT+D.ITEM_4_CNT+D.ITEM_5_CNT+D.ITEM_6_CNT
           +D.ITEM_7_CNT+D.ITEM_8_CNT+D.ITEM_9_CNT+D.ITEM_10_CNT AS ITEM_CNT_WSUM





///////////////////      ////////////////// 가장 밖 FROM절 


    FROM (  
        
///////////////////      ////////////////// 서브쿼리 A 시작
////////////////// MCLASS_CODE , TARGET_TIME , TARGET_TIME_SUM 구함

        SELECT /* 사업계획 값 조회(FROM~TO 기간에 비례해서 계산) */
                MCLASS_CODE,     //상품군 코드 //prd_grp_cd

                 // * (검색 날짜끼리 뺀 후 +1)-> 소숫점 절사
                SUM(TARGET_TIME)         //예정 편성시간값 sum(expct_form_time_val) 
                    * TRUNC(TO_DATE(#TO_DATE#,'YYYYMMDD') - TO_DATE(#FR_DATE#,'YYYYMMDD') + 1) 
                    / DECODE(SUBSTR(#FR_DATE#, 1, 6)                                          
                        , SUBSTR(#TO_DATE#, 1, 6) , TO_CHAR(LAST_DAY(TO_DATE(#TO_DATE#,'YYYYMMDD')), 'DD') 
                        , (TO_CHAR(LAST_DAY(TO_DATE(#TO_DATE#,'YYYYMMDD')), 'DD') + TO_CHAR(LAST_DAY(TO_DATE(#FR_DATE#,'YYYYMMDD')), 'DD'))
                      ) AS TARGET_TIME,

// sum(sum(TARGET_TIME)이 null 인 경우 -> 0) * TRUNC 뒤로 다 위랑 같음..

                SUM(NVL(SUM(TARGET_TIME),0)) OVER(PARTITION BY 1 ORDER BY 1 RANGE UNBOUNDED PRECEDING)
                    * TRUNC(TO_DATE(#TO_DATE#,'YYYYMMDD') - TO_DATE(#FR_DATE#,'YYYYMMDD') + 1) 
                    / DECODE(SUBSTR(#FR_DATE#, 1, 6)
                        , SUBSTR(#TO_DATE#, 1, 6) , TO_CHAR(LAST_DAY(TO_DATE(#TO_DATE#,'YYYYMMDD')), 'DD')
                        , (TO_CHAR(LAST_DAY(TO_DATE(#TO_DATE#,'YYYYMMDD')), 'DD') + TO_CHAR(LAST_DAY(TO_DATE(#FR_DATE#,'YYYYMMDD')), 'DD'))
                      ) AS TARGET_TIME_SUM

            FROM TB_BY071 // 마케팅 매체별 상품군별 사전 매출목표액 // brd_prd_grp_sale_tgt_amt_m  (air-cue)

            WHERE   MEDIA = #MEDIA#
            
                AND TARGET_MONTH IN (SUBSTR(#FR_DATE#, 1, 6), SUBSTR(#TO_DATE#, 1, 6))  //조건 날짜의 달과 같아야함
            
            GROUP BY MCLASS_CODE      ) A,

///////////////////      ////////////////// A 끝


///////////////////      ////////////////// 서브쿼리 B 시작
/////////////////// 

        (   SELECT /* 부문, 상품군을 조회 */
                C.DEPT_CD, C.DEPT_NM AS BUMUN_NM, D.DEPT_CODE,
                B.DEPT_NM AS TEAM_NM, A.MCLASS_CODE, A.MCLASS_NAME,  B.DEPT_SORT_CD
// A : 상품군별조직 brd_prd_grp_org_d / B : 부서테이블 / C : 부서테이블 / D : 부서별상품군 brd_prd_grp_dept_d  ( X )
            FROM TB_BY190 A, TB_BY190_DEPT D, TB_BB010 B, TB_BB010 C 
            WHERE   A.MCLASS_CODE = D.MCLASS_CODE
                AND D.DEPT_CODE   = B.DEPT_CD
                AND B.FK_DEPT_CD  = C.DEPT_CD
                AND A.STATUS      = 'Y'        //use_yn
                AND D.STATUS      = 'Y'   ) B, //use_yn

///////////////////      ////////////////// B 끝


///////////////////      ////////////////// 서브쿼리  ///  C시작


        (
        SELECT
            BROAD_YM, MCLASS_CODE,
            ROUND(SUM(NVL(WEEK_1_TIME,0))/60,1) AS MCLASS_1_TIME,
            ROUND(SUM(NVL(WEEK_2_TIME,0))/60,1) AS MCLASS_2_TIME,
            ROUND(SUM(NVL(WEEK_3_TIME,0))/60,1) AS MCLASS_3_TIME,
            ROUND(SUM(NVL(WEEK_4_TIME,0))/60,1) AS MCLASS_4_TIME,
            ROUND(SUM(NVL(WEEK_5_TIME,0))/60,1) AS MCLASS_5_TIME,
            ROUND(SUM(NVL(WEEK_6_TIME,0))/60,1) AS MCLASS_6_TIME,
            ROUND(SUM(NVL(WEEK_7_TIME,0))/60,1) AS MCLASS_7_TIME,
            ROUND(SUM(NVL(WEEK_8_TIME,0))/60,1) AS MCLASS_8_TIME,
            ROUND(SUM(NVL(WEEK_9_TIME,0))/60,1) AS MCLASS_9_TIME,
            ROUND(SUM(NVL(WEEK_10_TIME,0))/60,1) AS MCLASS_10_TIME,
            SUM(ROUND(SUM(NVL(WEEK_1_TME,0))/60,1)) OVER(PARTITION BY BROAD_YM ORDER BY BROAD_YM RANGE UNBOUNDED PRECEDING) AS MCLASS_1_TIME_SUM,
            SUM(ROUND(SUM(NVL(WEEK_2_TIME,0))/60,1)) OVER(PARTITION BY BROAD_YM ORDER BY BROAD_YM RANGE UNBOUNDED PRECEDING) AS MCLASS_2_TIME_SUM,
            SUM(ROUND(SUM(NVL(WEEK_3_TIME,0))/60,1)) OVER(PARTITION BY BROAD_YM ORDER BY BROAD_YM RANGE UNBOUNDED PRECEDING) AS MCLASS_3_TIME_SUM,
            SUM(ROUND(SUM(NVL(WEEK_4_TIME,0))/60,1)) OVER(PARTITION BY BROAD_YM ORDER BY BROAD_YM RANGE UNBOUNDED PRECEDING) AS MCLASS_4_TIME_SUM,
            SUM(ROUND(SUM(NVL(WEEK_5_TIME,0))/60,1)) OVER(PARTITION BY BROAD_YM ORDER BY BROAD_YM RANGE UNBOUNDED PRECEDING) AS MCLASS_5_TIME_SUM,
            SUM(ROUND(SUM(NVL(WEEK_6_TIME,0))/60,1)) OVER(PARTITION BY BROAD_YM ORDER BY BROAD_YM RANGE UNBOUNDED PRECEDING) AS MCLASS_6_TIME_SUM,
            SUM(ROUND(SUM(NVL(WEEK_7_TIME,0))/60,1)) OVER(PARTITION BY BROAD_YM ORDER BY BROAD_YM RANGE UNBOUNDED PRECEDING) AS MCLASS_7_TIME_SUM,
            SUM(ROUND(SUM(NVL(WEEK_8_TIME,0))/60,1)) OVER(PARTITION BY BROAD_YM ORDER BY BROAD_YM RANGE UNBOUNDED PRECEDING) AS MCLASS_8_TIME_SUM,
            SUM(ROUND(SUM(NVL(WEEK_9_TIME,0))/60,1)) OVER(PARTITION BY BROAD_YM ORDER BY BROAD_YM RANGE UNBOUNDED PRECEDING) AS MCLASS_9_TIME_SUM,
            SUM(ROUND(SUM(NVL(WEEK_10_TIME,0))/60,1)) OVER(PARTITION BY BROAD_YM ORDER BY BROAD_YM RANGE UNBOUNDED PRECEDING) AS MCLASS_10_TIME_SUM,
            ROUND(SUM(NVL(HOPE_RUN_TIME,0))/60,1) AS MCLASS_TIME_WSUM,
            SUM(ROUND(SUM(NVL(HOPE_RUN_TIME,0))/60,1)) OVER(PARTITION BY BROAD_YM ORDER BY BROAD_YM RANGE UNBOUNDED PRECEDING) AS MCLASS_W_TIME_SUM

///////////////////      ////////////////// 서브쿼리 안 서브쿼리

        FROM (  /**********************************************************************/
                SELECT
                    SUBSTR(#FR_DATE#, 1, 6) AS BROAD_YM,
                    A.MCLASS_CODE,
                    ROUND(DECODE(TO_CHAR(A.BROAD_DATE, 'WW')-TO_CHAR(TO_DATE(#FR_DATE#,'YYYYMMDD'), 'WW')+1,'1',SUM(A.HOPE_RUN_TIME),0),1) AS WEEK_1_TIME,
                    ROUND(DECODE(TO_CHAR(A.BROAD_DATE, 'WW')-TO_CHAR(TO_DATE(#FR_DATE#,'YYYYMMDD'), 'WW')+1,'2',SUM(A.HOPE_RUN_TIME),0),1) AS WEEK_2_TIME,
                    ROUND(DECODE(TO_CHAR(A.BROAD_DATE, 'WW')-TO_CHAR(TO_DATE(#FR_DATE#,'YYYYMMDD'), 'WW')+1,'3',SUM(A.HOPE_RUN_TIME),0),1) AS WEEK_3_TIME,
                    ROUND(DECODE(TO_CHAR(A.BROAD_DATE, 'WW')-TO_CHAR(TO_DATE(#FR_DATE#,'YYYYMMDD'), 'WW')+1,'4',SUM(A.HOPE_RUN_TIME),0),1) AS WEEK_4_TIME,
                    ROUND(DECODE(TO_CHAR(A.BROAD_DATE, 'WW')-TO_CHAR(TO_DATE(#FR_DATE#,'YYYYMMDD'), 'WW')+1,'5',SUM(A.HOPE_RUN_TIME),0),1) AS WEEK_5_TIME,
                    ROUND(DECODE(TO_CHAR(A.BROAD_DATE, 'WW')-TO_CHAR(TO_DATE(#FR_DATE#,'YYYYMMDD'), 'WW')+1,'6',SUM(A.HOPE_RUN_TIME),0),1) AS WEEK_6_TIME,
                    ROUND(DECODE(TO_CHAR(A.BROAD_DATE, 'WW')-TO_CHAR(TO_DATE(#FR_DATE#,'YYYYMMDD'), 'WW')+1,'7',SUM(A.HOPE_RUN_TIME),0),1) AS WEEK_7_TIME,
                    ROUND(DECODE(TO_CHAR(A.BROAD_DATE, 'WW')-TO_CHAR(TO_DATE(#FR_DATE#,'YYYYMMDD'), 'WW')+1,'8',SUM(A.HOPE_RUN_TIME),0),1) AS WEEK_8_TIME,
                    ROUND(DECODE(TO_CHAR(A.BROAD_DATE, 'WW')-TO_CHAR(TO_DATE(#FR_DATE#,'YYYYMMDD'), 'WW')+1,'9',SUM(A.HOPE_RUN_TIME),0),1) AS WEEK_9_TIME,
                    ROUND(DECODE(TO_CHAR(A.BROAD_DATE, 'WW')-TO_CHAR(TO_DATE(#FR_DATE#,'YYYYMMDD'), 'WW')+1,'10',SUM(A.HOPE_RUN_TIME),0),1) AS WEEK_10_TIME,
                    SUM(A.HOPE_RUN_TIME) AS HOPE_RUN_TIME



                FROM (  /****************************************************/


///////////////////      ////////////////// 서브쿼리 안 서브쿼리 안 서브쿼리


                        SELECT /* 프로그램 별 상품군 노출분(일까...) */
                            A.BROAD_DATE,
                             NVL(B.MCLASS_CODE,'20') MCLASS_CODE, 
                            DECODE(B.PGM_ID , NULL, ROUND((A.CLOSING_DATE-A.BROAD_DATE)*24*60), NVL(B.HOPE_RUN_TIME, 0)) //ROUND의 반올림 기준은 5 (ex.1235.5 -> 1236)
                                * SF_GET_W_RATE_AVG(A.MEDIA,     //cue : WeightedRateByTimeFlowQueryClient 개발완료됨 / 시간대별 평균가중율 계산
                                DECODE(B.PGM_ID,NULL,A.BROAD_DATE,SF_GET_NOCHUL_DATE_BYMCLASS(B.PGM_ID,B.MCLASS_CODE,'1')),
                                DECODE(B.PGM_ID,NULL,A.CLOSING_DATE,SF_GET_NOCHUL_DATE_BYMCLASS(B.PGM_ID,B.MCLASS_CODE,'2')),
                                TO_CHAR(A.BROAD_DATE,'YYYYMM'),
                                TO_CHAR(A.BROAD_DATE,'D'),
                                '00'    ) AS HOPE_RUN_TIME
                      // A: 프로그램편성 brd_pgm_form_m   /   B : 프로그램편성로그 brd_prd_grp_from_m ( air-program )
                        FROM TB_BY100 A, TB_BY101 B 
                        WHERE   A.PGM_ID = B.PGM_ID(+)
                            AND A.MEDIA  = #MEDIA#
                            AND A.PROD_TYPE = '1'
                            AND A.BROAD_TYPE != '3'
                            AND A.BROAD_DATE BETWEEN TO_DATE(#FR_DATE#,'YYYYMMDD') AND  TO_DATE(#TO_DATE#,'YYYYMMDD') + 0.99999
                            AND NVL(A.DELETE_YN,'N') != 'Y'
                        /****************************************************/) A
                GROUP BY A.MCLASS_CODE, TO_CHAR(A.BROAD_DATE, 'WW')
                /**********************************************************************/)
        GROUP BY BROAD_YM, MCLASS_CODE
    ) C,


///////////////////      //////////////////   /// C 끝

///////////////////      //////////////////   /// 서브쿼리 D 시작

    (
        SELECT BROAD_YM, MCLASS_CODE,
               ROUND(SUM(NVL(WEEK_1_TIME,0))/60,1) AS ITEM_1_TIME,
               ROUND(SUM(NVL(WEEK_2_TIME,0))/60,1) AS ITEM_2_TIME,
               ROUND(SUM(NVL(WEEK_3_TIME,0))/60,1) AS ITEM_3_TIME,
               ROUND(SUM(NVL(WEEK_4_TIME,0))/60,1) AS ITEM_4_TIME,
               ROUND(SUM(NVL(WEEK_5_TIME,0))/60,1) AS ITEM_5_TIME,
               ROUND(SUM(NVL(WEEK_6_TIME,0))/60,1) AS ITEM_6_TIME,
               ROUND(SUM(NVL(WEEK_7_TIME,0))/60,1) AS ITEM_7_TIME,
               ROUND(SUM(NVL(WEEK_8_TIME,0))/60,1) AS ITEM_8_TIME,
               ROUND(SUM(NVL(WEEK_9_TIME,0))/60,1) AS ITEM_9_TIME,
               ROUND(SUM(NVL(WEEK_10_TIME,0))/60,1) AS ITEM_10_TIME,
               SUM(ROUND(SUM(NVL(WEEK_1_TIME,0))/60,1))
                OVER(PARTITION BY BROAD_YM
                    ORDER BY BROAD_YM
                    RANGE UNBOUNDED PRECEDING) AS ITEM_1_TIME_SUM,
               SUM(ROUND(SUM(NVL(WEEK_2_TIME,0))/60,1))
                OVER(PARTITION BY BROAD_YM
                    ORDER BY BROAD_YM
                    RANGE UNBOUNDED PRECEDING) AS ITEM_2_TIME_SUM,
               SUM(ROUND(SUM(NVL(WEEK_3_TIME,0))/60,1))
                OVER(PARTITION BY BROAD_YM
                    ORDER BY BROAD_YM
                    RANGE UNBOUNDED PRECEDING) AS ITEM_3_TIME_SUM,
               SUM(ROUND(SUM(NVL(WEEK_4_TIME,0))/60,1))
                OVER(PARTITION BY BROAD_YM
                    ORDER BY BROAD_YM
                    RANGE UNBOUNDED PRECEDING) AS ITEM_4_TIME_SUM,
               SUM(ROUND(SUM(NVL(WEEK_5_TIME,0))/60,1))
                OVER(PARTITION BY BROAD_YM
                    ORDER BY BROAD_YM
                    RANGE UNBOUNDED PRECEDING) AS ITEM_5_TIME_SUM,
               SUM(ROUND(SUM(NVL(WEEK_6_TIME,0))/60,1))
                OVER(PARTITION BY BROAD_YM
                    ORDER BY BROAD_YM
                    RANGE UNBOUNDED PRECEDING) AS ITEM_6_TIME_SUM,
               SUM(ROUND(SUM(NVL(WEEK_7_TIME,0))/60,1))
                OVER(PARTITION BY BROAD_YM
                    ORDER BY BROAD_YM
                    RANGE UNBOUNDED PRECEDING) AS ITEM_7_TIME_SUM,
               SUM(ROUND(SUM(NVL(WEEK_8_TIME,0))/60,1))
                OVER(PARTITION BY BROAD_YM
                    ORDER BY BROAD_YM
                    RANGE UNBOUNDED PRECEDING) AS ITEM_8_TIME_SUM,
               SUM(ROUND(SUM(NVL(WEEK_9_TIME,0))/60,1))
                OVER(PARTITION BY BROAD_YM
                    ORDER BY BROAD_YM
                    RANGE UNBOUNDED PRECEDING) AS ITEM_9_TIME_SUM,
               SUM(ROUND(SUM(NVL(WEEK_10_TIME,0))/60,1))
                OVER(PARTITION BY BROAD_YM
                    ORDER BY BROAD_YM
                    RANGE UNBOUNDED PRECEDING) AS ITEM_10_TIME_SUM,

              ROUND(SUM(NVL(HOPE_RUN_TIME,0))/60,1) AS ITEM_TIME_WSUM,
              SUM(ROUND(SUM(NVL(HOPE_RUN_TIME,0))/60,1))
                OVER(PARTITION BY BROAD_YM
                    ORDER BY BROAD_YM
                    RANGE UNBOUNDED PRECEDING) AS ITEM_W_TIME_SUM,
               SUM(NVL(WEEK_1_CNT,0)) AS ITEM_1_CNT,
               SUM(NVL(WEEK_2_CNT,0)) AS ITEM_2_CNT,
               SUM(NVL(WEEK_3_CNT,0)) AS ITEM_3_CNT,
               SUM(NVL(WEEK_4_CNT,0)) AS ITEM_4_CNT,
               SUM(NVL(WEEK_5_CNT,0)) AS ITEM_5_CNT,
               SUM(NVL(WEEK_6_CNT,0)) AS ITEM_6_CNT,
               SUM(NVL(WEEK_7_CNT,0)) AS ITEM_7_CNT,
               SUM(NVL(WEEK_8_CNT,0)) AS ITEM_8_CNT,
               SUM(NVL(WEEK_9_CNT,0)) AS ITEM_9_CNT,
               SUM(NVL(WEEK_10_CNT,0)) AS ITEM_10_CNT


///////////////////      //////////////////

        FROM (

///////////////////      ////////////////// 서브쿼리 안 서브쿼리


            SELECT SUBSTR(#FR_DATE#, 1, 6) AS BROAD_YM,
                   NVL(E.CLASS,'20') AS MCLASS_CODE,  
                   ROUND(DECODE(TO_CHAR(A.BROAD_DATE, 'WW')-TO_CHAR(TO_DATE(#FR_DATE#,'YYYYMMDD'), 'WW')+1,'1',SUM(NVL(B.HOPE_RUN_TIME,0)),0),1) AS WEEK_1_TIME,
                   ROUND(DECODE(TO_CHAR(A.BROAD_DATE, 'WW')-TO_CHAR(TO_DATE(#FR_DATE#,'YYYYMMDD'), 'WW')+1,'2',SUM(NVL(B.HOPE_RUN_TIME,0)),0),1) AS WEEK_2_TIME,
                   ROUND(DECODE(TO_CHAR(A.BROAD_DATE, 'WW')-TO_CHAR(TO_DATE(#FR_DATE#,'YYYYMMDD'), 'WW')+1,'3',SUM(NVL(B.HOPE_RUN_TIME,0)),0),1) AS WEEK_3_TIME,
                   ROUND(DECODE(TO_CHAR(A.BROAD_DATE, 'WW')-TO_CHAR(TO_DATE(#FR_DATE#,'YYYYMMDD'), 'WW')+1,'4',SUM(NVL(B.HOPE_RUN_TIME,0)),0),1) AS WEEK_4_TIME,
                   ROUND(DECODE(TO_CHAR(A.BROAD_DATE, 'WW')-TO_CHAR(TO_DATE(#FR_DATE#,'YYYYMMDD'), 'WW')+1,'5',SUM(NVL(B.HOPE_RUN_TIME,0)),0),1) AS WEEK_5_TIME,
                   ROUND(DECODE(TO_CHAR(A.BROAD_DATE, 'WW')-TO_CHAR(TO_DATE(#FR_DATE#,'YYYYMMDD'), 'WW')+1,'6',SUM(NVL(B.HOPE_RUN_TIME,0)),0),1) AS WEEK_6_TIME,
                   ROUND(DECODE(TO_CHAR(A.BROAD_DATE, 'WW')-TO_CHAR(TO_DATE(#FR_DATE#,'YYYYMMDD'), 'WW')+1,'7',SUM(NVL(B.HOPE_RUN_TIME,0)),0),1) AS WEEK_7_TIME,
                   ROUND(DECODE(TO_CHAR(A.BROAD_DATE, 'WW')-TO_CHAR(TO_DATE(#FR_DATE#,'YYYYMMDD'), 'WW')+1,'8',SUM(NVL(B.HOPE_RUN_TIME,0)),0),1) AS WEEK_8_TIME,
                   ROUND(DECODE(TO_CHAR(A.BROAD_DATE, 'WW')-TO_CHAR(TO_DATE(#FR_DATE#,'YYYYMMDD'), 'WW')+1,'9',SUM(NVL(B.HOPE_RUN_TIME,0)),0),1) AS WEEK_9_TIME,
                   ROUND(DECODE(TO_CHAR(A.BROAD_DATE, 'WW')-TO_CHAR(TO_DATE(#FR_DATE#,'YYYYMMDD'), 'WW')+1,'10',SUM(NVL(B.HOPE_RUN_TIME,0)),0),1) AS WEEK_10_TIME,
                   SUM(NVL(B.HOPE_RUN_TIME,0)
                   * SF_GET_W_RATE_AVG(A.MEDIA,    //cue : WeightedRateByTimeFlowQueryClient 개발완료됨 / 시간대별 평균가중율 계산
                              SF_GET_NOCHUL_DATE_BYITEM(B.PGM_ID,B.ITEM_SEQ,'1'), //Program : ItemExposuretimeFlowQueryClient 개발완료됨
                              SF_GET_NOCHUL_DATE_BYITEM(B.PGM_ID,B.ITEM_SEQ,'2'), //Program : ItemExposuretimeFlowQueryClient 개발완료됨
                              TO_CHAR(A.BROAD_DATE,'YYYYMM'),
                              TO_CHAR(A.BROAD_DATE,'D'),
                              '00' )
                   ) AS HOPE_RUN_TIME,
                   ROUND(DECODE(TO_CHAR(A.BROAD_DATE, 'WW')-TO_CHAR(TO_DATE(#FR_DATE#,'YYYYMMDD'), 'WW')+1,'1',COUNT(B.PGM_ID),0),1) AS WEEK_1_CNT,
                   ROUND(DECODE(TO_CHAR(A.BROAD_DATE, 'WW')-TO_CHAR(TO_DATE(#FR_DATE#,'YYYYMMDD'), 'WW')+1,'2',COUNT(B.PGM_ID),0),1) AS WEEK_2_CNT,
                   ROUND(DECODE(TO_CHAR(A.BROAD_DATE, 'WW')-TO_CHAR(TO_DATE(#FR_DATE#,'YYYYMMDD'), 'WW')+1,'3',COUNT(B.PGM_ID),0),1) AS WEEK_3_CNT,
                   ROUND(DECODE(TO_CHAR(A.BROAD_DATE, 'WW')-TO_CHAR(TO_DATE(#FR_DATE#,'YYYYMMDD'), 'WW')+1,'4',COUNT(B.PGM_ID),0),1) AS WEEK_4_CNT,
                   ROUND(DECODE(TO_CHAR(A.BROAD_DATE, 'WW')-TO_CHAR(TO_DATE(#FR_DATE#,'YYYYMMDD'), 'WW')+1,'5',COUNT(B.PGM_ID),0),1) AS WEEK_5_CNT,
                   ROUND(DECODE(TO_CHAR(A.BROAD_DATE, 'WW')-TO_CHAR(TO_DATE(#FR_DATE#,'YYYYMMDD'), 'WW')+1,'6',COUNT(B.PGM_ID),0),1) AS WEEK_6_CNT,
                   ROUND(DECODE(TO_CHAR(A.BROAD_DATE, 'WW')-TO_CHAR(TO_DATE(#FR_DATE#,'YYYYMMDD'), 'WW')+1,'7',COUNT(B.PGM_ID),0),1) AS WEEK_7_CNT,
                   ROUND(DECODE(TO_CHAR(A.BROAD_DATE, 'WW')-TO_CHAR(TO_DATE(#FR_DATE#,'YYYYMMDD'), 'WW')+1,'8',COUNT(B.PGM_ID),0),1) AS WEEK_8_CNT,
                   ROUND(DECODE(TO_CHAR(A.BROAD_DATE, 'WW')-TO_CHAR(TO_DATE(#FR_DATE#,'YYYYMMDD'), 'WW')+1,'9',COUNT(B.PGM_ID),0),1) AS WEEK_9_CNT,
                   ROUND(DECODE(TO_CHAR(A.BROAD_DATE, 'WW')-TO_CHAR(TO_DATE(#FR_DATE#,'YYYYMMDD'), 'WW')+1,'10',COUNT(B.PGM_ID),0),1) AS WEEK_10_CNT
            // A : brd_pgm_form_m 포로그램 편성 ( O ) / B : brd_main_prd_form_m 주상품편성 ( O ) / C : brd_sub_prd_form_m 부상품편성 ( O )
            / D : brd_prd_m 상품 ( X ) / E : brd_md_dept_prd_grp_d MD부서별상품군디테일 ( X )
            FROM TB_BY100 A, TB_BY102 B, TB_BY103 C, TB_BG004 D, TB_BY230 E   
            WHERE A.PGM_ID = B.PGM_ID
              AND B.PGM_ID = C.PGM_ID
              AND B.ITEM_SEQ = C.ITEM_SEQ
              AND 'Y'      = C.MAIN_GOODS_FLAG
              AND C.GOODS_CODE = D.GOODS_CODE
              AND D.MD_ID  = E.MD_ID(+)
              AND A.MEDIA  = #MEDIA#
              AND A.PROD_TYPE  = '1'
              AND A.BROAD_TYPE != '3'
              AND A.BROAD_DATE BETWEEN TO_DATE(#FR_DATE#,'YYYYMMDD') AND TO_DATE(#TO_DATE#,'YYYYMMDD') + 0.99999
              AND NVL(A.DELETE_YN,'N') != 'Y'
              AND NVL(B.DELETE_YN,'N') != 'Y'
              AND NVL(C.DELETE_YN,'N') != 'Y'
            GROUP BY  NVL(E.CLASS,'20'), TO_CHAR(A.BROAD_DATE, 'WW')
        )
        GROUP BY BROAD_YM, MCLASS_CODE
    ) D,


///////////////////      ////////////////// ///  D 끝


///////////////////      ////////////////// ///  E 시작
/////////////////// 리턴 값 : MCLASS_CODE, HOPE_RUN_TIME(MCLASS_TIME_MSUM), MCLASS_M_TIME_SUM

    (
        SELECT
            /*BROAD_YM, */MCLASS_CODE ,
            HOPE_RUN_TIME AS MCLASS_TIME_MSUM, /* 당월누계 상품군  */
            SUM(HOPE_RUN_TIME) OVER(PARTITION BY 1 ORDER BY 1 RANGE UNBOUNDED PRECEDING ) AS MCLASS_M_TIME_SUM  /* 당월누계 전체  */

        FROM (

////////////////////////////////////////////////서브쿼리 시작  MCLASS_CODE, HOPE_RUN_TIME 리턴 , SF_GET_W_RATE_AVG는 나중에 적용
            SELECT
                /*TO_CHAR(BROAD_DATE,'YYYYMM') AS BROAD_YM,*/ MCLASS_CODE,
                ROUND(SUM(NVL(HOPE_RUN_TIME,0))/60,1) AS HOPE_RUN_TIME
            FROM (

///////////////////////////////////////////////서브쿼리 안 서브쿼리 시작 
                SELECT
                    A.BROAD_DATE,
                     NVL(B.MCLASS_CODE,'20') AS MCLASS_CODE,
                    DECODE(B.PGM_ID,NULL,(A.CLOSING_DATE-A.BROAD_DATE)*24*60,NVL(B.HOPE_RUN_TIME,0))
  // cue : WeightedRateByTimeFlowQueryClient
                        * SF_GET_W_RATE_AVG (A.MEDIA,  
                        DECODE(B.PGM_ID,NULL,A.BROAD_DATE,SF_GET_NOCHUL_DATE_BYMCLASS(B.PGM_ID,B.MCLASS_CODE,'1')), 
                        DECODE(B.PGM_ID,NULL,A.CLOSING_DATE,SF_GET_NOCHUL_DATE_BYMCLASS(B.PGM_ID,B.MCLASS_CODE,'2')),
                        TO_CHAR(A.BROAD_DATE,'YYYYMM'),
                        TO_CHAR(A.BROAD_DATE,'D'),
                        '00'    ) AS HOPE_RUN_TIME
                FROM TB_BY100 A, TB_BY101 B     // A : brd_pgm_form_m 포로그램 편성 / B : brd_prd_grp_from_m 상품군편성   ( O )
                WHERE A.PGM_ID = B.PGM_ID(+)
                AND A.MEDIA  = #MEDIA#
                AND A.PROD_TYPE = '1'
                AND A.BROAD_TYPE != '3'
                AND A.BROAD_DATE BETWEEN TO_DATE(#FR_DATE#,'YYYYMMDD') AND TO_DATE(#TO_DATE#,'YYYYMMDD') + 0.99999
                AND NVL(A.DELETE_YN,'N') != 'Y'

            )
            GROUP BY /*TO_CHAR(BROAD_DATE,'YYYYMM'),*/ MCLASS_CODE
        )
    ) E,



///////////////////      ////////////////// ///  E 끝


///////////////////      ////////////////// ///  F 시작

    (       SELECT /*TO_CHAR(A.BROAD_DATE,'YYYYMM') AS BROAD_YM,*/
                   NVL(E.CLASS,'20') AS MCLASS_CODE,
                   ROUND(SUM(NVL(B.HOPE_RUN_TIME,0)
                   * SF_GET_W_RATE_AVG(A.MEDIA,
                              SF_GET_NOCHUL_DATE_BYITEM(B.PGM_ID,B.ITEM_SEQ,'1'),
                              SF_GET_NOCHUL_DATE_BYITEM(B.PGM_ID,B.ITEM_SEQ,'2'),
                              TO_CHAR(A.BROAD_DATE,'YYYYMM'),
                              TO_CHAR(A.BROAD_DATE,'D'),
                              '00' )
                   )/60,1) AS ITEM_TIME_MSUM,
                   SUM(ROUND(SUM(NVL(B.HOPE_RUN_TIME,0)
                   * SF_GET_W_RATE_AVG(A.MEDIA,
                              SF_GET_NOCHUL_DATE_BYITEM(B.PGM_ID,B.ITEM_SEQ,'1'),
                              SF_GET_NOCHUL_DATE_BYITEM(B.PGM_ID,B.ITEM_SEQ,'2'),
                              TO_CHAR(A.BROAD_DATE,'YYYYMM'),
                              TO_CHAR(A.BROAD_DATE,'D'),
                              '00' )
                   )/60,1))
                   OVER(PARTITION BY 1
                        ORDER BY 1
                        RANGE UNBOUNDED PRECEDING) AS ITEM_M_TIME_SUM
            // A : brd_pgm_form_m 포로그램 편성 ( O ) / B : brd_main_prd_form_m 주상품편성 ( O ) / C : brd_sub_prd_form_m 부상품편성 ( O )
            / D : brd_prd_m 상품 ( X ) / E : brd_md_dept_prd_grp_d MD부서별상품군디테일 ( X )
            FROM TB_BY100 A, TB_BY102 B, TB_BY103 C, TB_BG004 D, TB_BY230 E
            WHERE A.PGM_ID = B.PGM_ID
              AND B.PGM_ID = C.PGM_ID
              AND B.ITEM_SEQ = C.ITEM_SEQ
              AND 'Y'      = C.MAIN_GOODS_FLAG
              AND C.GOODS_CODE = D.GOODS_CODE
              AND D.MD_ID  = E.MD_ID(+)
              AND A.MEDIA  = #MEDIA#
              AND A.PROD_TYPE = '1'
              AND A.BROAD_TYPE != '3'
              AND A.BROAD_DATE BETWEEN TO_DATE(#FR_DATE#,'YYYYMMDD') AND TO_DATE(#TO_DATE#,'YYYYMMDD') + 0.99999
              AND NVL(A.DELETE_YN,'N') != 'Y'
              AND NVL(B.DELETE_YN,'N') != 'Y'
              AND NVL(C.DELETE_YN,'N') != 'Y'
            GROUP BY /*TO_CHAR(A.BROAD_DATE,'YYYYMM'),*/ NVL(E.CLASS,'20')
    ) F,


///////////////////      ////////////////// ///  F 끝


///////////////////      ////////////////// ///  Z 시작
///////////////////  Z의 경우 엑셀을 위한 임시 테이블 같음. 필요 유무 확인해봐야함

(   /***************************************************************************************/
    /** 이병전 대리 요청 엑셀 export시 sort 처리를 하기 위한 view                               **/
    SELECT '06' AS ORD, '07' AS MCLASS_CODE, '생활용품'    AS MCLASS_NAME FROM DUAL UNION ALL
    SELECT '07' AS ORD, '18' AS MCLASS_CODE, '가구/카펫'   AS MCLASS_NAME FROM DUAL UNION ALL
    SELECT '04' AS ORD, '08' AS MCLASS_CODE, '주방용품'    AS MCLASS_NAME FROM DUAL UNION ALL
    SELECT '05' AS ORD, '09' AS MCLASS_CODE, '주방가전'    AS MCLASS_NAME FROM DUAL UNION ALL
    SELECT '02' AS ORD, '06' AS MCLASS_CODE, '건강식품'    AS MCLASS_NAME FROM DUAL UNION ALL
    SELECT '01' AS ORD, '10' AS MCLASS_CODE, '일반식품'    AS MCLASS_NAME FROM DUAL UNION ALL
    SELECT '08' AS ORD, '12' AS MCLASS_CODE, '아동'        AS MCLASS_NAME FROM DUAL UNION ALL
    SELECT '03' AS ORD, '11' AS MCLASS_CODE, '레포츠'      AS MCLASS_NAME FROM DUAL UNION ALL
    SELECT '12' AS ORD, '05' AS MCLASS_CODE, '이미용'      AS MCLASS_NAME FROM DUAL UNION ALL
    SELECT '17' AS ORD, '15' AS MCLASS_CODE, '의류'        AS MCLASS_NAME FROM DUAL UNION ALL
    SELECT '16' AS ORD, '13' AS MCLASS_CODE, '속옷'        AS MCLASS_NAME FROM DUAL UNION ALL
    SELECT '15' AS ORD, '14' AS MCLASS_CODE, '침구'        AS MCLASS_NAME FROM DUAL UNION ALL
    SELECT '19' AS ORD, '16' AS MCLASS_CODE, '보석'        AS MCLASS_NAME FROM DUAL UNION ALL
    SELECT '99' AS ORD, '17' AS MCLASS_CODE, '장식용품'    AS MCLASS_NAME FROM DUAL UNION ALL
    SELECT '18' AS ORD, '19' AS MCLASS_CODE, '잡화'        AS MCLASS_NAME FROM DUAL UNION ALL
    SELECT '21' AS ORD, '21' AS MCLASS_CODE, '보험'        AS MCLASS_NAME FROM DUAL UNION ALL
    SELECT '22' AS ORD, '22' AS MCLASS_CODE, '서비스'      AS MCLASS_NAME FROM DUAL UNION ALL
    SELECT '09' AS ORD, '01' AS MCLASS_CODE, '일반가전'    AS MCLASS_NAME FROM DUAL UNION ALL
    SELECT '10' AS ORD, '03' AS MCLASS_CODE, '컴퓨터'      AS MCLASS_NAME FROM DUAL UNION ALL
    SELECT '11' AS ORD, '04' AS MCLASS_CODE, 'Digital기기' AS MCLASS_NAME FROM DUAL UNION ALL
    SELECT '99' AS ORD, '20' AS MCLASS_CODE, '기타'        AS MCLASS_NAME FROM DUAL         ) Z

///////////////////      ////////////////// ///  Z 끝 
 
    WHERE B.MCLASS_CODE = A.MCLASS_CODE(+) // 전부 B(TB_BY071) 테이블 중심으로 조인
      AND B.MCLASS_CODE = C.MCLASS_CODE(+) //
      AND B.MCLASS_CODE = D.MCLASS_CODE(+) //
      AND B.MCLASS_CODE = E.MCLASS_CODE(+) //
      AND B.MCLASS_CODE = F.MCLASS_CODE(+) //
      AND B.MCLASS_CODE = Z.MCLASS_CODE(+) //


    ORDER BY B.DEPT_SORT_CD



    ////////////////////




  ]]>
  </dco-statement>